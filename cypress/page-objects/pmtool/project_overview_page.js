import { HomePage } from "./home_page";


export class ProjectOverview {
    constructor() {
        this.addProjectButton = "[test_id='Add Project']";
        this.projectNewInputField = "[data-testid='Name']";
        this.buttonSave = "button[type='submit']";
    }

    clickAddProjectButton() {
        cy.get(this.addProjectButton).should("be.visible").click();
        return this;
    }

    fillNewProjectName(projectName) {
        cy.get(this.projectNewInputField).should("be.visible").type(projectName);
        return this;
    }

    saveNewProject() {
        cy.get(this.buttonSave).scrollIntoView().click();
        return new HomePage();
    }

}