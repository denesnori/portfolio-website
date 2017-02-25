var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert Elements': function(browser) {
    browser
      .url("file:///home/nori/projects/portfolio-website/index.html")
      .waitForElementVisible('body')
      .saveScreenshot("test/screenshot.png")
      .assert.title('Nora Denes | Web Developer | Portfolio | Contact')
      .assert.attributeContains('#report-content-source', 'href', 'https://github.com/FAC9/childline-yoti/')
      .assert.attributeContains('#report-content-online', 'href', 'https://childline-yoti.herokuapp.com/')

      .end()
  }
}
