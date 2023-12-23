export class RegistrationPageEshop {
    constructor() {
        this.firstNameInput = "#input-firstname";
        this.lastNameInput = "#input-lastname";
        this.emailInput = "#input-email";
        this.telephoneInput = "#input-telephone";
        this.passwordInput = "#input-password";
        this.passwordConfirmInput = "#input-confirm";
        this.continueButton = "input[value='Continue']";
    }
    fillFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
        return this;
    }
    fillLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
        return this;
    }
    fillEmail(emailAdress) {
        cy.get(this.emailInput).type(emailAdress);
        return this;
    }
    fillTelephone(telephoneNumber) {
        cy.get(this.telephoneInput).type(telephoneNumber);
        return this;
    }
    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }
    fillPaswordConfirmation(password) {
        cy.get(this.passwordConfirmInput).type(password);
        return this;
    }
    clickContinueButton() {
        cy.get(this.continueButton).click();
        return this; // TODO vrátit  hlavní stránku po přihlášení do dodělání page objectu
    }
}