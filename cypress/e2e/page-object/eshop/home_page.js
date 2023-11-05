export class HomePage {
    constructor() {
        this.profileButton = "#user_dropdown";
        this.logoffButton = "#logout";
    }
    clickProfile() {
        cy.get(this.profileButton).click();
    }

    clickLogoff() {
        cy.get(this.logoffButton).click();
    }

}

