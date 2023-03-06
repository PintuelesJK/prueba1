import loginPage from "../pageobjects/login.page.js";

describe('Prueba 1', () => {
    it('primer prueba', async function () {
        await browser.url('https://the-internet.herokuapp.com/');

        await browser.maximizeWindow()

        //assert title
        console.log('Test');
        await expect(browser).toHaveTitleContaining('The Internet');
        
        
        //Click botton
        const button1 = await $('=Form Authentication');
        await button1.click(); 
        browser.pause(1000);         

    });

    //login test
    it('it should test a login', async function () {

        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        browser.pause(1000)

        //assert title post loggin
        await expect(browser).toHaveTitleContaining('The Internet');

    


    })

    
      
});