describe('Login tests with XPath selectors', () => {
    it('Login with Xpath Selectors', () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.xpath("//input[@id='username']").type("cy_podzim_2023");
        cy.xpath("//input[@id='password']").type("CypressPodzim");
        cy.xpath("//button[@type='submit']").click();
        cy.wait(5000);
        cy.xpath("//li[@class='dropdown user'][@id='user_dropdown']").click();
        cy.xpath('//li[@id="logout"]').click();
    });
});