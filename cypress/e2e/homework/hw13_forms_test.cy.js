import { faker } from "@faker-js/faker";
import { HomePage } from "../../page-objects/automationteststore/home_page";
import { LoginPageAutomationTestStore } from "../../page-objects/automationteststore/login_page";
import { CreateAccountPageAutomationTestStore } from "../../page-objects/automationteststore/create_account_page";
import { MyAccountPageAutomationTestStore } from "../../page-objects/automationteststore/my_account_page";

describe('AutomationTestStore registration homework', () => {
    let firstName;
    let lastName;
    let exampleEmail;
    let telephone;
    let address1;
    let city;
    let zipCode;
    let loginName;
    let password;
    beforeEach(() => {
        firstName = faker.person.firstName();
        lastName = faker.person.lastName();
        exampleEmail = faker.internet.exampleEmail();
        telephone = faker.phone.number();
        address1 = faker.location.streetAddress();
        city = faker.location.city();
        zipCode = faker.location.zipCode();
        loginName = faker.internet.password({ length: 8 }); //z důvodu validace , spousta jmen v generátou jsou 4 místná
        password = faker.internet.password({ length: 10 });
    });
    it('Fill register page', () => {

        new HomePage()
            .openStore()
            .clickLoginLabel()
        new LoginPageAutomationTestStore()
            .checkRegisteRadioButton()
            .clickContinueButton();

        new CreateAccountPageAutomationTestStore()
            .fillFirstName(firstName)
            .fillLastName(lastName)
            .fillEmail(exampleEmail)
            .fillTelephone(telephone)
            .fillCompany("IKEACO")
            .fillAddress1(address1)
            .chooseCountryCzechFromDropdown()
            .chooseRegionVysocina()
            .fillCity(city)
            .fillZipCode(zipCode)
            .fillLoginName(loginName)
            .fillPassword(password)
            .confirmPassword(password)
            .notSubscribe()
            .checkPolicy()
            .submit();

        new MyAccountPageAutomationTestStore()
            .checkAccountCreated();

    });

});