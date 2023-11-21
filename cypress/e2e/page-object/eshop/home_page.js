export class HomePage {
    constructor() {
        this.profileButton = "#a[title='My Account']";
        this.registerButton = "a[href='http://tredgate.com/eshop/index.php?route=account/register']";
        this.logoffButton = "#logout";
    }
    clickProfile() {
        cy.get(this.profileButton).click();
    }

    clickLogoff() {
        cy.get(this.logoffButton).click();
    }

}

