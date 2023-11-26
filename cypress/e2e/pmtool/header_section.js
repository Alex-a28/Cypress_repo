export class HeaderSection extends MenuSection {
    constructor(path) {
        super(path);
        this.profileButton = "#user_dropdown > .dropdown-toggle";
        this.logoffButton = "#logout > a";
    }
}