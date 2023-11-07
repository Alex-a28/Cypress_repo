import { LoginPage } from "../page-object/pmtool/login_page";

describe('Forgotten password annd itś setting', () => {
    it('Lost password E2E test', () => {
        new LoginPage()
            .openPmtool()
            .clickPasswordForgotten()
            .typeUsername("lost_password_user")
            .typeEmail("lost_password@tredgate.com")
            .clickSend();
    });

    it('Open forgotte Password and retur back Test', () => {
        new LoginPage()
            .openPmtool()
            .clickPasswordForgotten()
            .clickBack();
    });
});