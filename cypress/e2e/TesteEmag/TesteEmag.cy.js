describe("Teste Emag", () => {
//Test prin care verifici daca se poate deschide si inchide meniul lateral
    it("Test prin care verifici daca se poate deschide si inchide meniul lateral", () => {

        cy.visit("https://emag.ro");

        cy.get('.js-refuse').click();

        cy.get('.navbar-aux-content__departments > .em').trigger("mouseover").click();

        cy.get('#tpb_homepage_4').click();

        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').should("be.hidden");
    })

    //Test de adaugare al unui produs in cart
    it("Test de adaugare al unui produs in cart", () => {

        cy.visit("https://emag.ro");

        cy.get('.js-refuse').click({ waitForAnimations: false });

        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(3) > a').click();
        cy.get('.emg-widget-4-display > :nth-child(1) > .emg-brand-item > a > img').click();
        cy.get('[data-name="Tableta Lenovo Tab M8 (4th Gen) 2024, Octa-Core ,4GB RAM, 64GB, Wifi, Arctic Grey"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn').click();
        cy.get(".modal-header button[type='button']").should('be.visible').click()
        cy.get("#my_cart").click();
        cy.get(".order-summary-widget").should("exist");
    })
})