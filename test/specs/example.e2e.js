describe('Prueba 1', () => {
    it('primer prueba', async function () {
        await browser.url('https://webdriver.io/');

        await browser.maximizeWindow()

        //assert title
        console.log('Test');
        await expect(browser).toHaveTitleContaining('WebdriverIO');
        
      });
      
});