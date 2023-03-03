describe('Prueba 1', () => {
    it('primer prueba', async () => {
        await browser.url('https://webdriver.io/')

          //assert title
          console.log('Test');
        await expect(browser).toHaveTitleContaining('WebdriverIO')
    });

});

