var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert Elements': function(browser) {
    browser
      //load the page ans save a screenshot
      .url("file:///home/nori/projects/portfolio-website/index.html")
      .waitForElementVisible('body')
      .saveScreenshot("test/screenshot.png")
      .assert.title('Nora Denes | Web Developer | Portfolio | Contact')

      // select random elements and test whether they have certain attributes
      .assert.attributeContains('#report-content-source', 'href', 'https://github.com/FAC9/childline-yoti/')
      .assert.attributeContains('#report-content-online', 'href', 'https://childline-yoti.herokuapp.com/')
      .assert.attributeContains('#linkedin', 'href', 'https://www.linkedin.com/in/denesnori')

      // select random elements and test whether they appear on screen
      .assert.visible('header[class=header]')
      .assert.visible('h4[class=header__title]')
      .assert.visible('div[class=cards]')
      .assert.visible('div[class=contact__icons]')
      .assert.visible('footer[class=footer]')

      // test thta CSS changes on smaller screens
      .resizeWindow(400, 600)
      .assert.cssProperty(".header", "display", "block")


      // test that header opacity changes on scroll
      .assert.cssProperty(".header", "background-color", "rgba(255, 255, 255, 1)")
      .moveToElement(".contact", 0, 0)
      .assert.cssProperty(".header", "background-color", "rgba(255, 255, 255, 0.8)")
      .assert.cssProperty(".header__img", "opacity", "0.2")

      .end()
  }
}
