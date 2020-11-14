/// <reference types="cypress" />

describe("build pizza App", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start: setup
      cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name="name"]');
    // const specialInput = () => cy.get('input[name="specialIns"]');
    const addOrderBtn = () => cy.get('#addOrderBtn');

    const pepperoniInput = () => cy.get('input[name="pepperoni"]');
    const italianSaugeInput = () => cy.get('input[name="italianSauge"]');
    const onionsInput = () => cy.get('input[name="onions"]');
    const extraChesseInput = () => cy.get('input[name="extraCheese"]');

    const homeLink = () => cy.get("#homeLink");
    const formLink = () => cy.get("#formLink");
    const OrderBtn = () => cy.get("#addOrderBtn");


    it("tests working", () => {
        expect(1 + 2).to.equal(3);
    });

    // it("can click form link", () => {
    //   formLink()
    //   .click()
    // });

    it("type name text", () => {
      nameInput()
      .should("have.value", "")
      .type("tania")
      .should("have.value", "tania")
    });

    it("can select toppings", () => {
        pepperoniInput()
        .check()
        italianSaugeInput()
        .check()
        onionsInput()
        .check()
        extraChesseInput()
        .check()
    });

    it("can submit order", () => {
        OrderBtn()
        .click()
    });

});