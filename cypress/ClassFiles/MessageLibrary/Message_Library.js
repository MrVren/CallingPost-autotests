/// <reference types="Cypress" />

import selectors from "../../Selectors/MessageLibrary/MessageLibrary";

class CreateMessage {
  OpenMessageLibrary() {
    cy.wait(5000);
    cy.get(selectors.MessageLibraryBtn).click({ force: true });
  }

  CreateVoiceMsg(name = `Test${Math.ceil(Math.random() * 999).toString()}`) {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.textarea).eq(1).type("Hello");
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(9).click();
    cy.wait(15000);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.wait(5000);
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(-1).click();
    cy.wait(2000);
  }

  CreateTextMessage(name = `Test${Math.ceil(Math.random() * 999).toString()}`) {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.textarea).eq(0).type("Hello");
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(-1).click();
    cy.wait(2000);
  }

  CreateEmailMessage(
    name = `Test${Math.ceil(Math.random() * 999).toString()}`
  ) {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(3000);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test");
    cy.wait(6000);
    cy.get(selectors.createVoiceMsgBtn).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(-1).click();
    cy.wait(2000);
  }
}

export default CreateMessage;
