import { Dashboard } from "./tegb_dashboard";

export class TegBLoginPage {
    constructor() {
        this.usernameInput = "[data - testid= 'usesrname']"
        this.passwordInput = "[data-testid='password']"
        this.loginButton = "[data-testid='log_in']"
        this.LogoutButton = "[data-testid='logout_button']";
    }

    typeUserName(username) {
        cy.get(this.usernameInput).type(username);
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    clickLogin(login) {
        cy.get(this.loginButton).click();
        return new Dashboard();
    }

    /*
    */
}
