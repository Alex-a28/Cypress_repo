import { LoginPage } from "../page-object/pmtool/login_page";

describe('Fluent ogin Tests', () => {
    it('Login to pmtool using Fluent API Tests', () => {
        new LoginPage()
            .openPmtool()
            .typeUserName("cy_podzim_2023")
            .typePassword("CypressPodzim")
            .clickLogin()
            .clickProfile()
            .clickLogoff();

    });
});