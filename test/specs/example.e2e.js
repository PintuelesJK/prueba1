import loginPage from "../pageobjects/login.page";

describe('Prueba 1', () => {
    it('primer prueba', async function () {
        await browser.url('https://webdriver.io/');

        await browser.maximizeWindow()

        //assert title
        console.log('Test');
        await expect(browser).toHaveTitleContaining('WebdriverIO');
        
        
        //Click botton
        const button1 = await $('=Get Started');
        await button1.click(); 
        browser.pause(10000);           


         loginPage.login('test', '1223345567'). 

      });
      
});