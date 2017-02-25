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
      .assert.visible('header[class=header]')
      .assert.visible('div[class=header__logo]')
      .assert.visible('h2[class=header__name]')
      .assert.visible('h4[class=header__title]')

      // test that header opacity changes on scroll
      .moveToElement(".contact", 0, 0)
      .assert.cssProperty(".header", "background-color", "rgba(255, 255, 255, 0.8)")
      .assert.cssProperty(".header__img", "opacity", "0.2")

      .end()
  }
}
