import { LoginPage } from "./login_page";
import { ProjectOverview } from "./project_overview_page";


export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.userDropdown = "#user_dropdown"
    this.logoffButton = "#logout";
    this.projectSideBar = "#Projects";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogoff() {
    cy.get(this.userDropdown).click();
    cy.get(this.logoffButton).click();
    return new LoginPage();
  }
  openProjects() {
    cy.get(this.projectSideBar).click();
    return new ProjectOverview();
  }

}
