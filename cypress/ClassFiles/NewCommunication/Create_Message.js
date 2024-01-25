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

  ViewMessages() {
    cy.wait(1000);
    cy.get(selectors.viewMsgBtn).eq(0).click();
    cy.wait(3000);
  }

  SearchMessages() {
    cy.wait(1000);
    cy.get(selectors.searchInput).eq(-1).clear().type("Test{enter}");
    cy.wait(3000);
  }

  PreviewMessages() {
    cy.get(selectors.previewIcon).click();
    cy.wait(3000);
  }

  SelectMessage() {
    cy.wait(2000);
    cy.get(selectors.selectMessageBtn).eq(6).click();
    cy.wait(3000);
  }

  ScheduleMessage() {
    cy.wait(1000);
    cy.get(selectors.toggleBtn).eq(-1).click();
    cy.wait(3000);
    cy.get(selectors.updateBtn).eq(-1).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.toggleBtn).eq(-1).click();
    cy.wait(3000);
  }

  AddCallerId() {
    cy.get(selectors.selectGroupInput).eq(0).click()
    cy.wait(100);
    cy.get(selectors.selectGroup).eq(0).click()
    cy.wait(1000)
    cy.get(selectors.selectVoiceMsg).click()
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.addIdBtn).click();
    cy.wait(1000);
    cy.get(selectors.phoneInput).clear().type("0000");
    cy.wait(1000);
    cy.get(selectors.phoneInput).clear().type("2345678923");
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
  }

  EditTemplate() {
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).eq(6).click();
    cy.wait(1000);
    getIframeBody(selectors.iframe).find(selectors.iframeTextBox);
    // .children()
    // .eq(3)
    // .type("Template Edited");
  }
}

export default CreateVoiceMessage;
