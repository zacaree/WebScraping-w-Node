
// Tutorial found here:
// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var gravelyUrl1 = 'https://www.gravely.com/en-us/stand-on-mowers/pro-stance'
var gravelyUrl2 = 'https://www.gravely.com/en-us/zero-turn-mowers/pro-turn-400-xdz'

var gravelyStructure = 'table.product-specs--spec-table'


request(gravelyUrl1, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    var $ = cheerio.load(html);
    $(gravelyStructure).each(function (i, element) {
      var a = $(this);
      fs.writeFileSync('log.txt', a, function (err) {
        if (err) {
          console.log('failed');
        } else {
          console.log('done');
        }
      })
    });
  }
});




