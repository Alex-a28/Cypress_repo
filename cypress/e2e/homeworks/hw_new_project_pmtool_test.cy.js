import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectOverview } from "../../page-objects/pmtool/project_overview_page";

describe('Tests in PM Tool', () => {
    it('Log in an create new project in PMTool', () => {
        new LoginPage()
            .openPmtool()
            .typeUsername("cy_podzim_2023")
            .typePassword("CypressPodzim")
            .clickLogin();

        new HomePage()
            .openProjects();

        new ProjectOverview()
            .clickAddProjectButton()
            .fillNewProjectName("testDed")
            .saveNewProject();

        new HomePage()
            .clickLogoff();

    });
});