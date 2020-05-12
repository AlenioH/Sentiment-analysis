const got = require('got');

(async () => {
  try {
    const response = await got.post(
      'https://apidemo.theysay.io/api/v1/sentiment',
      {
        headers: {
          'Content-Type': 'application/json',
          Referer: 'https://apidemo.theysay.io/',
        },
        json: {
          text: `${process.argv.slice(2)}`,
        },
      },
    );
    let message = JSON.parse(response.body); // turns text received from web-server to object
    const info = Object.values(message); //returns an array of values
    const confidence = info[0].confidence * (100).toFixed(2) + '%'; // returns the  values and turns them to %
    const positivity = info[0].positive * (100).toFixed(2) + '%';
    const negativity = info[0].negative * (100).toFixed(2) + '%';
    const neutrality = info[0].neutral * (100).toFixed(2) + '%';

    console.log(
      `The sentiment of your text (with ${confidence} confidence) is: \n${positivity} positive \n${negativity} negative \n${neutrality} neutral`,
    );
  } catch (error) {
    console.log(error.response.body);
  }
})();
