import { UsersPage } from "./users_page";

export class AddUserModal {
    constructor() {
        this.accessGroup = "div[data-testid='Access Group'] select";
        this.usernameInput = "div[data-testid='Username']";
        this.passwordInput = "[id='password']";
        this.firstNameInput = "div[data-testid='First Name']";
        this.lastNameInput = "div[data-testid='Last Name']";
        this.userEmailInput = "div[data-testid='User Email']";
        this.saveButton = "button[type='submit']";
    }
    selectAccessGroup(accessgroup) {
        cy.get(this.accessGroup).select(accessgroup);
        return this;
    }
    typeUserName(username) {
        cy.get(this.usernameInput).type(username);
        return this;
    }
    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }
    typeFirstName(fakerFirstName) {
        cy.get(this.firstNameInput).type(fakerFirstName);
        return this;
    }
    typeLastName(fakerLastName) {
        cy.get(this.lastNameInput).type(fakerLastName);
        return this;
    }
    typeUserEmail(fakerUserEmail) {
        cy.get(this.userEmailInput).type(fakerUserEmail);
        return this;
    }
    clickSave() {
        cy.get(this.saveButton).click();
        return new UsersPage();
    }

}