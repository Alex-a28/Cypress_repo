import { should } from "chai";
import { MyAccountPageAutomationTestStore } from "./my_account_page";

export class CreateAccountPageAutomationTestStore {
    constructor() {
        this.firstNameInput = "#AccountFrm_firstname";
        this.lastNameInput = "#AccountFrm_lastname";
        this.emailInput = "#AccountFrm_email";
        this.telephoneInput = "#AccountFrm_telephone";
        this.companyName = "#AccountFrm_company";
        this.address1 = "#AccountFrm_address_1";
        this.countryDropdown = "#AccountFrm_country_id";
        this.chosenCzech = "option[value='56']";
        this.zipCodeInput = "#AccountFrm_postcode";
        this.regionDropdown = "#AccountFrm_zone_id";
        this.chosenRegionVysocina = "option[value='901']";
        this.cityInput = "#AccountFrm_city";
        this.loginName = "#AccountFrm_loginname";
        this.password = "#AccountFrm_password";
        this.passwordConfirm = "#AccountFrm_confirm";
        this.subscribeRadioButtonNo = "#AccountFrm_newsletter0";
        this.agreePrivacyPolicyCheckbox = "#AccountFrm_agree";
        this.continueButton = "button[title='Continue']";
    }
    fillFirstName(firstName) {
        cy.get(this.firstNameInput).should("be.visible").type(firstName);
        return this;
    }
    fillLastName(lastName) {
        cy.get(this.lastNameInput).should("be.visible").type(lastName);
        return this;
    }
    fillEmail(email) {
        cy.get(this.emailInput).should("be.visible").type(email);
        return this;
    }
    fillTelephone(telNumber) {
        cy.get(this.telephoneInput).should("be.visible").type(telNumber);
        return this;
    }
    fillCompany(company) {
        cy.get(this.companyName).should("be.visible").type(company);
        return this;
    }
    fillAddress1(address1) {
        cy.get(this.address1).should("be.visible").type(address1);
        return this;
    }
    chooseCountryCzechFromDropdown() {
        cy.get(this.countryDropdown).select("Czech Republic");
        cy.wait(2000);
        return this;
    }
    chooseRegionVysocina() {
        cy.get(this.regionDropdown).select("Vysocina");
        cy.wait(2000);
        return this;
    }
    fillCity(city) {
        cy.get(this.cityInput).should("be.visible").type(city);
        return this;
    }
    fillZipCode(zipCode) {
        cy.get(this.zipCodeInput).should("be.visible").type(zipCode);
        return this;
    }
    fillLoginName(loginName) {
        cy.get(this.loginName).should("be.visible").type(loginName);
        return this;
    }
    fillPassword(password) {
        cy.get(this.password).should("be.visible").type(password);
        return this;
    }
    confirmPassword(confirmPassword) {
        cy.get(this.passwordConfirm).should("be.visible").type(confirmPassword);
        return this;
    }
    notSubscribe() {
        cy.get(this.subscribeRadioButtonNo).should("be.visible").click();
        return this;
    }
    checkPolicy() {
        cy.get(this.agreePrivacyPolicyCheckbox).should("be.visible").check();
        return this;
    }
    submit() {//nelze udelat pres submit protože se na stránke nachází 3 formuláře
        cy.get(this.continueButton).should("be.visible").click();
        return new MyAccountPageAutomationTestStore();
    }

}