describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Deve ir para a pagina de login", () => {
    cy.visit("/");
    cy.url().should("contain", "/");

    cy.get('input[name="email"]').type("teste01@gmail.com");
    cy.get('input[name="password"]').type("123456");
    cy.contains("Entrar").click();
  });
});
