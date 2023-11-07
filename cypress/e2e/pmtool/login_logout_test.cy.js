import { HomePage } from "../page-object/eshop/home_page";
import { LoginPage } from "../page-object/pmtool/login_page";



describe('Login and Logout Tests', () => {
    it('Login to Pmtool', () => {
        const loginPage = new LoginPage();
        loginPage.openPmtool();
        loginPage.usernameInput("cy_podzim_2023");
        loginPage.typePassword("CypressPodzim");
        loginPage.clickLogin();
    });
    it('Login and logout test', () => {
        const loginPage = new LoginPage();
        const homePage = new HomePage();
        loginPage.openPmtool();
        loginPage.usernameInput("cy_podzim_2023");
        loginPage.typePassword("CypressPodzim");
        loginPage.clickLogin();
        homePage.clickProfile();
        homePage.clickLogoff();
    });



});