const request = require('request');
const cheerio = require('cheerio');

request('https://www.gravely.com/en-us/zero-turn-mowers/pro-turn-200-xdz', 
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const specs = $('#MainContent_specTable').find('tbody tr');
      
      // let models = [];

      $(specs).each((i, el) => {
        // models += $(el).html();
        const spec = $(el).children('td');
        console.log(spec.html());
      });

      // console.log(models);
    }
  }
);