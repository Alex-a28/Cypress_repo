import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsLink = "#Projects";
    this.dashboardLink = "#dashboard";
    this.usersLink = ".page-sidebar-menu > #Users"
  }

  openDashboard() {
    const { HomePage } = require("./home_page");
    cy.get(this.dashboardLink).click();
    return new HomePage();
  }

  openProjects() {
    const { ProjectsPage } = require("./projects_page");
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }
  openUsers() {
    const { UsersPage } = require("./users_page");
    cy.get(this.usersLink).click();
    return new UsersPage();

  }
}
