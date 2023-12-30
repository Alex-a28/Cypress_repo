import newUserData from "../../fixtures/new_user_data.json";
import { AddUserModal } from "../../page-objects/pmtool/add_user_modal";
import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { UsersPage } from "../../page-objects/pmtool/users_page";
import { faker } from "@faker-js/faker";

describe('DDT test users creation', () => {
    beforeEach(() => {
        new LoginPage()
            .openPmtool()
            .typeUsername("cy_podzim_2023")
            .typePassword("CypressPodzim")
            .clickLogin()
            .openUsers();
        new UsersPage()
            .clickAddUserButton();
    });
    newUserData.forEach(userData => {
        let generatedUsername = userData.name_prefix + faker.number.int({ max: 99 });
        it('DDT User creation', () => {
            const fakerFirstName = faker.person.firstName();
            const fakerLastName = faker.person.lastName();
            const fakerUserEmail = faker.internet.exampleEmail();
            new AddUserModal()
                .selectAccessGroup(userData.access_group)
                .typeUserName(generatedUsername)
                .typePassword(userData.password)
                .typeFirstName(fakerFirstName)
                .typeLastName(fakerLastName)
                .typeUserEmail(fakerUserEmail)
                .clickSave();
            new UsersPage().clickLogoff();
            new LoginPage()
                .openPmtool()
                .typeUsername(generatedUsername)
                .typePassword("54321")
                .clickLogin();
            new HomePage()
                .checkHeaderContainsUsername(fakerLastName)
                .clickLogoff();
        });
    });
});