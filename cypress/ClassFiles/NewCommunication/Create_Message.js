/// <reference types="Cypress" />

import selectors from "../../Selectors/NewCommunication/CreateMessage";

class CreateVoiceMessage {
  OpenNewCommunication() {
    cy.wait(5000);
    cy.get(selectors.newCommunicationBtn).click({ force: true });
  }

  SelectGroup() {
    cy.wait(3000);
    cy.get(selectors.selectGroupInput).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(1).click();
  }

  CreateVoiceMsg() {
    cy.wait(2000);
    cy.get(selectors.selectGroupInput)
      .eq(2)
      .clear()
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(2000);
    cy.get(selectors.selectGroupInput).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.textarea).eq(1).type("Hello");
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(9).click();
    cy.wait(15000);
    cy.get(selectors.selectGroupInput).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.wait(5000);
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(6).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(0).click();
    cy.wait(2000);
  }

  CreateTextMessage() {
    cy.wait(2000);
    cy.get(selectors.selectGroupInput)
      .eq(2)
      .clear()
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.textarea).eq(0).type("Hello");
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(6).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(0).click();
    cy.wait(2000);
  }

  CreateEmailMessage() {
    cy.wait(5000);
    cy.get(selectors.selectGroupInput)
      .eq(2)
      .clear()
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test");
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(-1).click({ force: true });
    cy.wait(5000);
    cy.get(selectors.createVoiceMsgBtn).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(8000);
    cy.get(selectors.sendMessageBtn).eq(0).click();
    cy.wait(2000);
  }
}

export default CreateVoiceMessage;
