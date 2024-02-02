/// <reference types="Cypress" />

import selectors from "../../Selectors/MessageLibrary/MessageLibrary";

class CreateMessage {
  OpenMessageLibrary() {
    cy.wait(500);
    cy.get(selectors.MessageLibraryBtn).click({ force: true });
  }

  CreateVoiceMsg(name = `Test${Math.ceil(Math.random() * 999).toString()}`) {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(500);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(500);
    cy.get(selectors.selectVoiceMsgBtn).click()
    cy.get(selectors.nextButton).click();
    cy.wait(500);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(500);
    cy.get(selectors.selectGroup).eq(2).click();
    cy.wait(500);
    cy.get('.cdk-textarea-autosize').type("Hello");
    cy.wait(500);
    cy.get(selectors.createVoiceMsgBtn).eq(0).click();
    cy.wait(20000);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(500);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.scrollTo("bottom")
    cy.get(selectors.sendMessageBtn).click({force: true});
    cy.wait(2000);
  }

  CreateTextMessage(name = `Test${Math.ceil(Math.random() * 999).toString()}`) {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(500);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(500);
    cy.get(selectors.selectTextMsgBtn).click();
    cy.get(selectors.nextButton).click()
    cy.wait(500);
    cy.get(selectors.textarea).eq(0).type("Hello");
    cy.scrollTo("bottom")
    cy.get(selectors.sendMessageBtn).click({force: true});
    cy.wait(2000);
  }

  CreateEmailMessage(
    name = `Test${Math.ceil(Math.random() * 999).toString()}`
  ) {
    cy.wait(4000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(3000);
    cy.get(selectors.messageName).clear().type(name);
    cy.wait(500);
    cy.get(selectors.selectEmailMsgBtn).click();
    cy.get(selectors.nextButton).click()
    cy.wait(500);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test");
    cy.wait(5000);
    cy.get('.template-predefines__predifine').eq(0).click();
    cy.scrollTo("bottom")
    cy.get(selectors.sendMessageBtn).click({force: true});
    cy.get('.button--blue').click()
  }

  EditTextMessage(name) {
    cy.wait(2000);
    cy.get(selectors.messageTable)
      .children()
      .each((child) => {
        if (child.children().eq(1).children().text().includes(name)) {
          cy.wrap(child)
            .children()
            .eq(-1)
            .children()
            .children()
            .children()
            .children()
            .eq(0)
            .click();
          return false;
        }
      });
    cy.wait(2000);
    cy.get(selectors.messageName)
      .clear()
      .type(`Text Edited${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(500);
    cy.get(selectors.nextButton).click();
    cy.wait(500);
    cy.get(selectors.textarea).eq(0).type(" Edited");
    cy.wait(500);
    cy.get(selectors.sendMessageBtn).click();
    cy.get(selectors.snackBar).should("have.text", " Message has been updated successfully. ")
  }

  EditEmailMessage(name) {
    cy.wait(4000);
    cy.get(selectors.messageTable)
      .children()
      .each((child) => {
        if (child.children().eq(1).children().text().includes(name)) {
          cy.wrap(child)
            .children()
            .eq(-1)
            .children()
            .children()
            .children()
            .children()
            .eq(0)
            .click();
          return false;
        }
      });
    cy.wait(500);
    cy.get(selectors.messageName)
      .clear()
      .type(`Email Edited${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(500);
    cy.get(selectors.nextButton).click();
    cy.wait(500);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test Edited");
    cy.wait(5000);
    cy.scrollTo("bottom")
    cy.get(selectors.sendMessageBtn).wait(1000).click()
    cy.wait(5000);
    cy.get(selectors.snackBar).should("have.text", " Message has been updated successfully. ")
    }

  EditVoiceMessage(name) {
    cy.wait(2000);
    cy.get(selectors.messageTable)
      .children()
      .each((child) => {
        if (child.children().eq(1).children().text().includes(name)) {
          cy.wrap(child)
            .children()
            .eq(-1)
            .children()
            .children()
            .children()
            .children()
            .eq(0)
            .click();
          return false;
        }
      });
    cy.wait(500);
    cy.get(selectors.messageName)
      .clear()
      .type(`Voice Edited${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(500);
    cy.get(selectors.nextButton).click();
    cy.wait(500);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(500);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.get(selectors.sendMessageBtn).click();
    cy.wait(2000)
    cy.get(selectors.snackBar).should("have.text", " Message has been updated successfully. ")
  }

  DeleteMessage() {
    cy.wait(4000);
    cy.get(selectors.messageTable)
      .children()
      .each((child) => {
        if (child.children().eq(1).children().text().includes("Edited")) {
          cy.wrap(child)
            .children()
            .eq(-1)
            .children()
            .children()
            .children()
            .children()
            .eq(-1)
            .click();
          return false;
        }
      });
    cy.wait(500);
    cy.get(selectors.confirmDel).click();
  }

  AddCallerId() {
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(500);
    cy.get(selectors.selectVoiceMsgBtn).click();
    cy.get(selectors.nextButton).click();
    cy.wait(2000);
    cy.get(selectors.addCallerIdBtn).click();
    cy.wait(500);
    cy.get(selectors.phoneInput).clear().type("2345678923");
    cy.wait(500);
    cy.get(selectors.createVoiceMsgBtn).eq(-3).click();
    cy.wait(500);
    cy.get('[id=mat-input-2]').clear().type("0000");
    cy.get(selectors.createVoiceMsgBtn).eq(-1).click();
  }

  ScheduleMessage(){
    cy.wait(2000);
    cy.get(selectors.createNewMsgBtn).eq(0).click();
    cy.wait(500);
    cy.get(selectors.messageName).clear().type(`Schedule Message${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(500);
    cy.get(selectors.selectEmailMsgBtn).click();
    cy.get(selectors.nextButton).click()
    cy.wait(500);
    cy.get(selectors.emailSubjectInput).clear().type("CallingPost Test");
    cy.wait(5000);
    cy.get('.template-predefines__predifine').eq(0).click();
    cy.get(selectors.sendMessageBtn).click();
    cy.wait(5000);
    cy.get(selectors.confirmDel).eq(-1).click();
    cy.wait(4000);
    cy.get(selectors.selectGroupInput).eq(0).click();
    cy.wait(500);
    cy.get(selectors.selectGroup).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.nextButton).click()
    cy.get(selectors.nextButton).click()
    cy.get(selectors.scheduleToggle).eq(-1).click();
    cy.wait(500);
    cy.get(selectors.termsCheckbox).eq(-1).click();
    cy.wait(500);
    cy.get(selectors.nextButton).click();
    cy.wait(20000)
    cy.get(selectors.scheduleMessage).click();
  }

  SearchMessage() {
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(1).click();
    cy.wait(500);
    cy.get(selectors.searchInput).clear().type("Message{enter}");
  }

  SortFilterMessage() {
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.sortSelect).click();
    cy.wait(500);
    cy.get(selectors.selectOption).eq(1).click();
  }

  FilterVoiceMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).check({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).uncheck({force:true});
    cy.wait(4000);
  }

  FilterTextMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).check({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).uncheck({force:true});
    cy.wait(4000);
  }

  FilterEmailMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).check({force:true});
    cy.wait(4000);
  }

  DeleteMessages(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(3).click();
    cy.wait(500);
    cy.get(selectors.deleteBtn).eq(-2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).click({force:true});
    cy.wait(500);
    cy.get(selectors.createVoiceMsgBtn).eq(1).click();
    cy.wait(500);
    cy.get(selectors.confirmDel).click();
    cy.wait(4000);
  }

  CancelMessages(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(3).click();
    cy.wait(500);
    cy.get(selectors.overlayBtn).eq(-1).click();
  }

  PreviewTextMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).check({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.previewIcon).eq(0).click({force:true});
    cy.wait(4000);
  }

  PreviewEmailMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).check({force:true});
    cy.wait(500);
    cy.get(selectors.previewIcon).eq(0).click({force:true});
    cy.wait(4000);
  }

  PreviewVoiceMessage(){
    cy.wait(500);
    cy.get(selectors.searchIcon).eq(2).click();
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(0).check({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(1).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.filterCheckbox).eq(2).uncheck({force:true});
    cy.wait(500);
    cy.get(selectors.previewIcon).eq(0).click({force:true});
    cy.wait(4000);
  }

  ReplicateMessage(){
    cy.wait(500);
    cy.get(selectors.replicateMessage).eq(0).click();
    cy.wait(5000);
  }

  SendMessage(){
    cy.wait(500);
    cy.get(selectors.scheduleMessage).eq(0).click();
    cy.wait(4000);
    cy.get(selectors.selectGroupInput).eq(0).click();
    cy.wait(500);
    cy.get(selectors.selectGroup).eq(1).click();
    cy.wait(500);
    cy.get(selectors.nextButton).click();
    cy.wait(2000);
    cy.get(selectors.nextButton).click()
    cy.get('#mat-checkbox-10').click()
    cy.get(selectors.nextButton).click()

    cy.get(selectors.scheduleMessage).click();
  }
}

export default CreateMessage;
