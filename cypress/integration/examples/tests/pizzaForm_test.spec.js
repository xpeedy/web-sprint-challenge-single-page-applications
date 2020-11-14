/// <reference types="cypress" />

describe("Quotes app", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start: setup
      cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const specialInput = () => cy.get('input[name="specialIns"]');
    const addOrderbtnInput = () => cy.get('#addOrderBtn');
    const homeLink = () => cy.get("#homeLink");
    const formLink = () => cy.get("#formLink");


    it("tests working", () => {
        expect(1 + 2).to.equal(3);
    });

    it("can click form link", () => {
      formLink()
      .click()
    });

    it("type name text", () => {
      nameInput()
      .should("have.value", "")
      .type("tania")
      .should("have.value", "tania")
    });

});