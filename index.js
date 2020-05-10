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
          level: 'entity',
          //shows correct word count when it's one word, and then oooh lala, when 2 - 3, when 3 - 5, when 4 - 7...
          //doesn't show word count if level entity is incl
        },
      },
    );
    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
})();
