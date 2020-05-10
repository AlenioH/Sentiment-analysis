const got = require('got');

(async () => {
  try {
    let response = await got.post(
      'https://apidemo.theysay.io/api/v1/sentiment',
      {
        headers: {
          'Content-Type': 'application/json',
          Referer: 'https://apidemo.theysay.io/',
        },
        json: {
          text: `${process.argv.slice(2)}`,
          level: 'sentence',
          //shows correct word count when it's one word, and then oooh lala, when 2 - 3, when 3 - 5, when 4 - 7...
          //doesn't show word count if level entity/sentence is incl
        },
      },
    );

    console.log('Your text has the following sentiment:' + response.body);
  } catch (error) {
    console.log(error.response.body);
  }
})();
