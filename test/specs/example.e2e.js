describe('Prueba 1', () => {
    it('primer prueba', () => {
        browser.url('https://demoqa.com')

          //assert title
          expect(browser).tohavetitle('DEMOQA')
    });

});

