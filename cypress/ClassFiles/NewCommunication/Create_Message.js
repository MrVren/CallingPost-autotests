/// <reference types="Cypress" />

import selectors from "../../Selectors/NewCommunication/CreateMessage";

class CreateVoiceMessage {
  OpenNewCommunication() {
    cy.wait(5000);
    cy.get(selectors.newCommunicationBtn).click({ force: true });
  }

  SelectGroup() {
    cy.wait(3000);
    cy.get(selectors.selectGroupInput).eq(0).click({force: true});
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(1).click({force: true});
  }

  CreateVoiceMsg() {
    cy.wait(2000);
    cy.get('#mat-input-0')
      .clear({ force: true })
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`, {force: true});
      cy.get('#mat-checkbox-7').click({force: true})
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click({force: true});
    cy.wait(2000);
    cy.get(selectors.selectGroupInput).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).eq(2).click();
    cy.get(selectors.selectGroup).eq(2).click();
    cy.wait(1000);
    cy.get('textarea[formcontrolname="message"]').type("Hello");
    
    cy.get('.mat-flat-button').click();
    cy.wait(20000);

    cy.get(selectors.createVoiceMsgBtn).click();
    cy.wait(1000);
    cy.get('#mat-checkbox-10').click()
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click();
    cy.wait(5000);
    cy.get(selectors.sendMessageBtn).eq(0).click();
    cy.wait(2000);
  }

  CreateTextMessage() {
    cy.wait(2000);
    cy.get('#mat-input-0')
      .clear({ force: true })
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`, {force: true});
    cy.get('#mat-checkbox-8').click({force: true})
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click({force: true});
    cy.wait(1000);
    cy.get(selectors.textarea).eq(0).type("Hello");
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click();
    cy.wait(1000);
    cy.get('#mat-checkbox-10').click()
    cy.wait(1000);
    cy.get('.user-message-action').eq(1).click();
  }

  CreateEmailMessage() {
    cy.wait(5000);
    cy.get('#mat-input-0')
      .clear({ force: true })
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`, {force: true});
    cy.get('#mat-checkbox-9').click({force: true})
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click({force: true});
    cy.wait(1000);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test");
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(-1).click({ force: true });
    cy.wait(5000);
    cy.get(selectors.createVoiceMsgBtn).click();
    cy.wait(1000);
    cy.get('#mat-checkbox-13').click()
    cy.get(selectors.createVoiceMsgBtn).click();
    cy.wait(8000);
    cy.get(selectors.sendMessageBtn).eq(0).click();
    cy.wait(2000);
  }

  ViewMessages() {
    cy.wait(5000);
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
    cy.get(selectors.selectMessageBtn).eq(0).click();
    cy.wait(3000);
  }

  ScheduleMessage() {
    cy.get(selectors.createVoiceMsgBtn).click()
    cy.wait(1000);
    cy.get(selectors.createVoiceMsgBtn).click()
    cy.get('#mat-checkbox-10').click()
    cy.get('#mat-radio-5').click();
    cy.wait(3000);
    cy.get(selectors.createVoiceMsgBtn).click()
    cy.wait(3000);
    cy.get(selectors.sendMessageBtn).click()
    cy.get(selectors.snackBar).should("have.text", " Message queue successfully created! ")
  }

  AddCallerId() {
    cy.wait(5000)
    cy.get(selectors.selectGroupInput).eq(0).click()
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(1).click()
    cy.wait(10000)
    cy.get(selectors.selectVoiceMsg).click()
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.addIdBtn).click();
    cy.wait(1000);
    cy.get(selectors.phoneInput).type("2345678923");
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
  }
}

export default CreateVoiceMessage;
