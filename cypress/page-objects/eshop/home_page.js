import { RegistrationPageEshop } from "./registration_page";

export class HomePageEshop {
    constructor() {
        this.homeUrl = ("http://tredgate.com/eshop/");
        this.myAccountDropdown = "a[title='My Account']";
        this.registerInDropdown = "ul[class$='dropdown-menu dropdown-menu-right'] [href$='http://tredgate.com/eshop/index.php?route=account/register']"

    }
    visitHomePageEshop() {
        cy.visit(this.homeUrl);
        return this;
    }
    clickMyaccount() {
        cy.get(this.myAccountDropdown).click();
        return this;
    }

    clickRegister() {
        cy.get(this.registerInDropdown).click();
        return new RegistrationPageEshop();
    }
}