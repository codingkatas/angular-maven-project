describe('homepage', function() {
    it('should present the expected text in the h1 element', function() {
        browser.get('/angular-maven-project');

        //element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.css('h1'));

        expect(greeting.getText()).toEqual('Introducing the codingkatas angular-maven-project setup - alien technology!!!');
    });
});