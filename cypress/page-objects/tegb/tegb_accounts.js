export class Accounts {
    constructor() {
        cy.intercept("/accounts/user").as("accounts_user");

        this.AccoutnsTitle = "[data-testid='title']";
        this.AccountSelectDropdown = "[data - testid='select_account']";
        this.AccountOverview = "[data-testid='account_overview_title']";
        this.AccountId = "[data-testid='account_id']";
        this.AccountBalance = "[data-testid='account_balance']"
        this.AccountType = "[data-testid='account_type']";
        this.AccountCreated = "[data-testid='account_created']";
    }
    waitForAccountdLoad() {

    }

    titleHasText() {

    }
}