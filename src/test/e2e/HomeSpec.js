describe('homepage', function() {
    it('should say welcome', function() {
        browser.get('/codingkatas_war_exploded');

        //element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.css('h1'));

        expect(greeting.getText()).toEqual('Introducing the codingkatas angular-maven-project setup - alien technology!!!');
    });
});