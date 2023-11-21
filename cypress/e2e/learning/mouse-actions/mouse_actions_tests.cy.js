describe('MOuse actions tests', () => {
    it('Croll into view', () => {
        cy.visit("http://tredgate.com/webtrain/");
        cy.get("h1").scrollIntoView().should("be.visible");
    });

    it('Double click test', () => {
        cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
        cy.get("#double-click").dblclick();

    });
    it('Click and hold ', () => {
        cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
        cy.get("#click-box").trigger("mousedown");
        cy.wait(4000);
        cy.get("#click-box").trigger("mouseup");
    });

    it('Drag and drop', () => {
        cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
        cy.get("#draggable").trigger("mousedown", { which: 1 });
        cy.get("#droppable")
            .trigger("mousemove")
            .trigger("mouseup", { force: true });
    });

    it.only('Hover', () => {
        cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
        cy.get(".hover .dropbtn")
            .realHover()
            .then((hoveredElement) => {
                cy.wait(2000);
                cy.get("#div-hover > div.dropdown.hover > div > a").click();
            });
    });



});