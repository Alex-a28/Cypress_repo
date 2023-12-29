export class MyAccountPageAutomationTestStore {
    constructor() {
        this.successfullMessage = ".maintext";
    }
    checkAccountCreated() {
        cy.get(this.successfullMessage).should("exist");
        return this;
    }
}