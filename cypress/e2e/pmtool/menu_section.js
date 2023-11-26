import { BasePAge } from "./base_page";

export class MenuSection extends BasePAge {
    constructor(path) {
        super(path);
        this.profileButton = "#user_dropdown > .dropdown-toggle";
    }
}