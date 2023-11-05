import { faker } from "@faker-js/faker";

describe('Using faker', () => {
    it('Generate unique data with faker', () => {
        const randomFullName = faker.person.fullName();
        const randomEmail = faker.internet.exampleEmail();
        const randomAddress = faker.location.streetAddress();
        cy.visit("http://tredgate.com/webtrain/registration.html")
        cy.log("Name: " + randomFullName);
        cy.log("Email: " + randomEmail);
        cy.log("Address: " + randomAddress);
        cy.get("#name").type(randomFullName);
        cy.get("#email").type(randomEmail);
        cy.get("#address").type(randomAddress);
    });
});