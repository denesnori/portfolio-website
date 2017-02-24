var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert Elements': function(browser) {
    browser
      .url("file:///home/nori/projects/portfolio-website/index.html")
      .assert.title('Nora Denes | Web Developer | Portfolio | Contact')
      .end()
  }
}
