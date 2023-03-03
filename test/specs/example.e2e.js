describe('Prueba 1', () => {
    it('primer prueba', () => {
        browser.url('https://demoqa.com')

          //assert title
          console.log('Test');
          expect(browser).tohavetitle('DEMOQA')
    });

});

