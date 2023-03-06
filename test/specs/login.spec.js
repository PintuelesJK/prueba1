import loginPage from "../pageobjects/login.page.js";

describe('Prubaa de login', () => {
    
    it('it should test a login', async function () {


            await loginPage.login('tomsmith', 'SuperSecretPassword');

        })
    
});



