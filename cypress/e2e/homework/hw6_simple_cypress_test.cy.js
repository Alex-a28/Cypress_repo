describe('Eshop Tredgate ', () => {
    it('Register account filling all positive scen', () => {
        cy.visit("http://tredgate.com/eshop/index.php?route=account/register");
        cy.get('#input-firstname').type("Alexandra");
        cy.get('#input-lastname').type("Dedinská");
        cy.get('#input-email').type("test@test.cz");
        cy.get('#input-telephone').type("999999999");
        cy.get('#input-password').type("Test01");
        cy.get('#input-confirm').type("Test01");
        cy.get('.pull-right > .btn').click();

    });
