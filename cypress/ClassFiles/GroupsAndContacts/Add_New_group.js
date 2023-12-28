/// <reference types="Cypress" />

import selectors from "../../Selectors/GroupsAndContacts/Add_New_group";

class GroupsAndContacts {
  OpenGroups() {
    cy.wait(5000);
    cy.get(selectors.groupsAndContactsBtn).click({ force: true });
  }

  OpenAllContacts() {
    cy.wait(1000);
    cy.get(selectors.allContactsTab).eq(1).click();
  }

  CreateGroup() {
    cy.wait(1000);
    cy.get(selectors.createGroupBtn).click();
    cy.wait(1000);
    cy.get(selectors.groupNameInput)
      .clear()
      .type(`KristenTest${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.saveGrpBtn).eq(0).click();
  }
}

export default GroupsAndContacts;
