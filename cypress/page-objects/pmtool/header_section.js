
import { MenuSection } from "./menu_sections";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoffButton = "#logout > a";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogoff() {
    const { LoginPage } = require("./login_page");
    cy.get(this.profileButton).click();
    cy.get(this.logoffButton).click();
    return new LoginPage();
  }
  checkHeaderContainsUsername(lastName) {
    cy.get(this.profileButton).should('contains.text', lastName);
    return this;
  }
}
