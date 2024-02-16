/// <reference types="Cypress" />

import selectors from "../../Selectors/Footer/Footer";

class Footer {
  OpenFeedback() {
    cy.get(selectors.feedback).should("have.text", " FEEDBACK  Feedback ")
  }

  OpenTermsOfService() {
    cy.get(selectors.termsOfService).should("have.text", "TERMS OF SERVICETerms of Service")
  }

  OpenHelpCenter() {
    cy.get(selectors.helpCenter).should("have.text", "Help Center")
  }

  OpenPrivacyPolicy() {
    cy.get(selectors.privacyPolicy).should("have.text", "PRIVACY POLICYPrivacy Policy")
  }
}

export default Footer;
