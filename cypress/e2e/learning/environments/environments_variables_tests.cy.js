describe('Environment tests', () => {
    it('Open PMTOol', () => {
        cy.visit(Cypress.env("pmtool_url"))
    });
    it('Open eshop ', () => {
        cy.visit(Cypress.env("eshop_url"))
    });
    it('Open Autometion test store', () => {
        cy.visit(Cypress.env("automation_test_store_url"));
    });
    it('Open webtrain', () => {
        cy.visit(Cypress.env("webtrain_url"))
    });
});