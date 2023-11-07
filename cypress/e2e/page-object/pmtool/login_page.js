import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";


export class LoginPage {
    constructor() { // selectory pro praaci se příkazama
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn";
        this.forgetPasswordButton = "#forget_password";
    }

    openPmtool() {
        cy.visit(this.pmtoolUrl);
        return this;
    }

    typeUserName(username) {
        cy.get(this.usernameInput).type(username)
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    clickLogin() {
        cy.get(this.loginButton).click();
        return HomePage();
    }

    clickPasswordForgotten() {
        cy.get(this.forgetPasswordButton).click();
        return new LostPasswordPage();
    }


}