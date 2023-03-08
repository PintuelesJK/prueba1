describe('xpath', () => {
    it('prueba de xpath', async  function () {

        await browser.url('https://es-la.facebook.com/');

        await browser.maximizeWindow()

        const button1 = await $('//*[contains(text(),"Crear cuenta nueva")]');

        await button1.click(); 
        browser.pause(1000);

        await expect(browser).toHaveTitleContaining('Facebook - Inicia sesión o regístrate');

        //const monthdd = ('//*[@id="month"]')

        const dropDown = await $$('//*[@id="month"]/option');


        const texto1 = await dropDown[9].getText();

        console.log('Test');
        
        await browser.pause(1000);

        
    });
    
});