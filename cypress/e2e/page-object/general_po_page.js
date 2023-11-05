export class GeneralPoPage {
    constructor() {
        this.someElemenSelector = "#selector";
    }
    someMethod() {
        cy.get(this.someElemenSelector).click();
    }
}