import { CreateAccountPageAutomationTestStore } from "./create_account_page";

export class LoginPageAutomationTestStore {
    constructor() {
        this.continueButton = "button[title='Continue']";
        this.registerAccountRadioButton = "#accountFrm_accountregister";
    }
    checkRegisteRadioButton() {
        cy.get(this.registerAccountRadioButton).should("exist");
        return this;
    }
    clickContinueButton() {
        cy.get(this.continueButton).scrollIntoView().click();
        return new CreateAccountPageAutomationTestStore();
    }
}