const { GeneralPoPage } = require("../../page-object/general_po_page");

describe('First page objet tests', () => {
    it('General Page Object Init', () => {
        const firstPageObject = new GeneralPoPage();
        firstPageObject.someMethod();
    }
    );
});