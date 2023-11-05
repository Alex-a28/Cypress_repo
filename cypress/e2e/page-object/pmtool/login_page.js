export class LoginPage {
    constructor() { // selectory pro praaci se příkazama
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn";
    }

    openPmtool() {
        cy.visit(this.pmtoolUrl);
    }

    typeUserName(username) {
        cy.get(this.usernameInput).type(username)
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }
}