import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe('MOcha tests', () => {

    beforeEach(() => {
        cy.viewport(800, 600);
        cy.log("bezim pred kazdym testem");
    });
    it('Visit PMTool', () => {
        new LoginPage().openPmtool();
    });

    it('Visit PMTool and login', () => {
        new LoginPage()
            .openPmtool()
            .typePassword("CypressPodzim")
            .typeUsername("cy_podzim_2023")
            .clickLogin();
    });


});