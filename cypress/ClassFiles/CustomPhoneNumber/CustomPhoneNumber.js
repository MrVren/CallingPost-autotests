/// <reference types="Cypress" />

import selectors from "../../Selectors/CustomPhoneNumber/CustomPhoneNumber";

class CustomNumbers {
  OpenCustomNumbers() {
    cy.get(selectors.mobileToolbarBtn).click({ force: true });
    cy.wait(3000);
    cy.get(selectors.customNumberBtn).eq(2).click({force: true});
  }

  AddNewPhoneNumber() {
    cy.wait(1000);
    cy.get(selectors.addPhoneNumber).click();
    cy.get(selectors.createTollFree).click();
    cy.wait(1000);
  }

  CreateVanityNumber() {
    cy.get(selectors.createVanityNumber).click();
  }

  SearchVanity() {
    cy.get(selectors.selectCode).click();
    cy.get(selectors.selectOption).eq(0).click();
    cy.get(selectors.vanityNumberInput).clear().type("7344664");
    cy.get(selectors.searchBtn).click();
  }

  HideVanityNumber() {
    cy.get(selectors.selectNumberTab).click();
  }

  ViewMoreOptions() {
    cy.get(selectors.viewMoreBtn).eq(-1).click();
  }

  SelectPreferredNumber() {
    cy.get(selectors.selectPreferredNumber).eq(0).click();
  }

  SelectDiscount() {
    cy.wait(1000);
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(1).click();
  }

  SelectDiscounts() {
    cy.wait(1000);
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(0).click();
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(1).click();
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(2).click();
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(3).click();
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(4).click();
  }

  SelectPayment() {
    cy.wait(1000);
    cy.get(selectors.selectInput).eq(1).click();
    cy.get("body").then((main) => {
      if (
        main
          .find(selectors.selectOption)
          .children()
          .eq(0)
          .text()
          .includes("No payment profiles.")
      ) {
        cy.log("adding credit card");
        cy.get(selectors.creditCardInput)
          .click({ force: true })
          .clear({ force: true })
          .type("4263982640269299", { force: true });
        cy.get(selectors.dateInput)
          .clear({ force: true })
          .type("0226{enter}", { force: true });
        cy.get(selectors.cvvInput)
          .clear({ force: true })
          .type("887", { force: true });
        cy.get(selectors.emailInput)
          .clear({ force: true })
          .type("email@gmail.com", { force: true });
        cy.get(selectors.addressInput)
          .clear({ force: true })
          .type("street 1", { force: true });
        cy.get(selectors.zipInput)
          .clear({ force: true })
          .type("56437", { force: true });
        cy.get(selectors.cityInput)
          .clear({ force: true })
          .type("Texas", { force: true });
        cy.get(selectors.stateInput)
          .clear({ force: true })
          .type("Texas", { force: true });
      } else {
        cy.log("credit card exist");
        cy.get(selectors.selectOption).eq(0).click();
      }
    });
  }

  CompletePurchase() {
    cy.get(selectors.purchaseBtn).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.closeBtn).click();
  }

  DeleteTestNumber() {
    cy.get(".warning").click();
    cy.wait(500);
    cy.get(".button--blue").click();
    cy.get(selectors.snackBar).should(
      "have.text",
      " Phone Number Successfully Deleted. "
    );
  }
}

export default CustomNumbers;
