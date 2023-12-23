import { HomePageEshop } from "../../page-objects/eshop/home_page";
import { RegistrationPageEshop } from "../../page-objects/eshop/registration_page";

describe('Tests for Tredgate eshop', () => {
    it('Open TredGate eshop and register', () => {
        new HomePageEshop()
            .visitHomePageEshop()
            .clickMyaccount()
            .clickRegister();
        new RegistrationPageEshop()
            .fillFirstName("Testík")
            .fillLastName("Keksík")
            .fillEmail("testik.keksik@example.org")
            .fillTelephone("999999999")
            .fillPassword("PasswordTG2023")
            .fillPaswordConfirmation("PasswordTG2023")
            .clickContinueButton();
    });
});