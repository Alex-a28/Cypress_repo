describe('First tests', () => {
    it('Open PMTool login page', () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.get('#username').type("cy_podzim_2023");
        cy.get('#password').type("CypressPodzim");
    });
});