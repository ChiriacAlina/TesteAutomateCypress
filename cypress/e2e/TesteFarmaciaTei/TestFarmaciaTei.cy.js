
describe("Login", () => {
    //Test de login cu user sau parola gresita
    it("Test de login cu user sau parola gresita", () => {

        cy.visit("https://comenzi.farmaciatei.ro/login");

        cy.get("#CybotCookiebotDialogBodyButtonDecline").click();

        cy.get("#auth-email").type("aaa@yahoo.com");
        cy.get("#auth-next-btn-txt").click();
        cy.get("#auth-login-password").type("123456");
        cy.get("#auth-next-btn").click();
        cy.get("#auth-login-password-error").should("exist");
    })

    //Test de login cu userul standard
    it("Test de login cu userul standard", () => {
        cy.visit("https://comenzi.farmaciatei.ro/login");

        cy.get("#CybotCookiebotDialogBodyButtonDecline").click();

        cy.get("#auth-email").type("alinaccccccc@yahoo.com");
        cy.get("#auth-next-btn").click();
        cy.get("#auth-login-password").type("TestareAutomata1.");
        cy.get("#auth-next-btn").click();
        cy.get("#header-links-left").should("exist");
    })

    //Test de logout
    it("Test de logout", () => {
        cy.visit("https://comenzi.farmaciatei.ro/login");

        cy.get("#CybotCookiebotDialogBodyButtonDecline").click();

        cy.get("#auth-email").type("alinaccccccc@yahoo.com");
        cy.get("#auth-next-btn").click();

        cy.get("#auth-login-password").type("TestareAutomata1.");
        cy.get("#auth-next-btn").click({force: true});

        cy.contains("span", "Deconectare").click();

        cy.get("#CybotCookiebotDialogBodyButtonDecline").click();

        cy.contains("span", "Contul meu").click();

        cy.get("input[type=email]").should("be.empty");
    })

    //Test de adaugare al unui produs in cart
    it(" Test de adaugare al unui produs in cart", () => {
        cy.visit("https://comenzi.farmaciatei.ro/login");

        cy.get("#CybotCookiebotDialogBodyButtonDecline").click();

        cy.get("#auth-email").type("alinaccccccc@yahoo.com");
        cy.get("#auth-next-btn").click();
        cy.get("#auth-login-password").type("TestareAutomata1.");
        cy.get("#auth-next-btn").click();
        cy.get('#desktop-search').type("baneocin").type("{enter}");
        cy.get(':nth-child(2) > [style="margin-top: auto;"] > .price-wrapper > .btn').click();
        cy.get("#top-cart-btn").click();
        cy.get("#top-cart-btn-qty").should("be.visible");       
    })
})