
// Tutorial found here:
// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs');



// Now we'll load the front page of Hacker News with a simple request and display the HTML code of the page, if no error occurs and the HTTP status code equals 200.
request('https://www.gravely.com/en-us/zero-turn-mowers/pro-turn-400-xdz', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    var $ = cheerio.load(html);
    $('table.product-specs--spec-table').each(function (i, element) {
      var a = $(this);
      fs.writeFileSync('log.txt', a, function (err) {
        if (err) {
          console.log('append failed');
        } else {
          console.log('done');
        }
      })
    });
  }
});




