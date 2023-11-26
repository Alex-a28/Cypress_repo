describe('bASE url TESTS', () => {
    it('Using URL in visit', () => {
        cy.visit("/");
    });

    it('Opern different url than baseURL', () => {
        cy.visit("https://tredgate.cz")
    });
});