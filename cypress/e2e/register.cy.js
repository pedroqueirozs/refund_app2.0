describe("Testando a funcionalidade de cadastro de novo usuário", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve clicar no botão de criar conta", () => {
    cy.contains("Criar conta").click();

    cy.intercept("POST", "/users").as("registerUser");

    cy.get('input[data-testid="name"]').type("Teste 02");
    cy.get('input[data-testid="email"]').type("teste02@gmail.com");
    cy.get('input[data-testid="password"]').type("123456");
    cy.get('input[data-testid="confirmPassword"]').type("123456");

    cy.contains("Cadastrar").click();

    //Teste para verificar se o usuario ja esta cadastrado.
    /*    cy.wait("@registerUser").then((interception) => {
      expect(interception.response.statusCode).to.eq(400);
    }); */
  });
});
