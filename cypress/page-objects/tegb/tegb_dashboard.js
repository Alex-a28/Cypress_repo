import { Accounts } from "./tegb_accounts";

export class Dashboard {
    constructor() {
        cy.intercept("/auth/login").as("login_api");

        this.subtitleBankApp = "[data-testid='app_subtitle']";
        this.Profile = "[data-testid='profile_link']";
        this.LogoutButton = "[data-testid='logout_button']";
        this.DashboardLink = "[data-testid='dashboard_section_link']";
        this.AccountsButton = "[data-testid='accounts_section_link']"
    }
    waitForLoginApi() {

        cy.wait("@login_api");
        return this;

    }
    clickAccounts() {
        cy.get(AccountsButton).clickAccounts();
        return new Accounts();
    }

}