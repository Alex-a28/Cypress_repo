import { LoginPage } from "../../page-object/pmtool/login_page";

describe('Keyboard arguments', () => {
    it("Confirm form by pressing enter key", () => {
        new LoginPage()
            .openPmtool()
            .typeUsername(Cypress.env("pmtool_username"))
            .typePassword(`${Cypress.env("pmtool_password")}{enter}`);
        // Cypress.env('pmtool_password') + '{enter}'
    });
});