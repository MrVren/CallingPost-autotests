/// <reference types="Cypress" />

import selectors from "../../Selectors/GroupsAndContacts/Add_New_group";

class GroupsAndContacts {
  OpenGroups() {
    cy.get(selectors.groupsAndContactsBtn).click({ force: true });
  }

  OpenAllContacts() {
    cy.get(selectors.allContactsTab).eq(1).click();
  }

  CreateGroup() {
    cy.wait(5000)
    cy.get(selectors.createGroupBtn).click();
    cy.get(selectors.groupNameInput)
      .type(`KristenTest${Math.ceil(Math.random() * 999999).toString()}`);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.get(selectors.selectGroup).eq(0).click();
    cy.get(selectors.saveGrpBtn).eq(0).click();
    cy.get(selectors.snackBar).should("have.text", " Group created successfully ")
  }

  CreateGroupAdd(name = `KristenTest${Math.ceil(Math.random() * 999999).toString()}`) {
    cy.wait(1000);
    cy.get(selectors.createGroupBtn).click();
    cy.wait(1000);
    cy.get(selectors.saveGrpBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.groupNameInput).type(name);
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.learnMoreBtn).click();
    cy.wait(1000);
    cy.get(selectors.closeModal).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.saveGrpBtn).eq(1).click();
    cy.wait(3000);
    cy.get(selectors.addExisting).click();
    cy.wait(2000);
    cy.get(selectors.selectContact).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.addSelected).eq(0).click();
    cy.wait(2000);
  }

  SelectGroup() {
    cy.wait(1000)
    cy.get(selectors.tableRow).eq(0).scrollIntoView();
    cy.get(selectors.tableRow).eq(-1).click()
    cy.wait(60000)
  }

  SelectLastGroup() {
    cy.wait(4000);
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
  }

  NewCommunication() {
    cy.get(selectors.newCommunication).click();
  }

  AddContacts() {
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
    cy.wait(60000);
    cy.get(selectors.addContactBtn).click();
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
    cy.wait(1000);
    cy.get(selectors.addContactBtn).click();
    cy.wait(1000);
    cy.get(selectors.addExisting).click();
    cy.wait(2000);
    cy.get(selectors.selectContact).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.addSelected).eq(0).click();
    cy.wait(2000);
  }

  DeleteContact() {
    cy.wait(2000);
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
    cy.wait(60000);
    cy.get(selectors.delContact).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
  }

  EditGroup() {
    cy.wait(2000);
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
    cy.wait(60000);
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.editNameInput).type("Group Edited");
    cy.wait(1000);
    cy.get(selectors.saveEditName).click();
    cy.wait(1000);
  }

  DeleteGroup() {
    cy.wait(2000);
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
    cy.wait(60000);
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
  }

  SearchGroup() {
    cy.get(selectors.searchBtn).click();
    cy.wait(1000);
    cy.get(selectors.searchInput).type('Test');
    cy.wait(4000);
  }

  FilterGroup() {
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(2).click();
  }

  FilterContacts() {
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(4).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(5).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(7).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(8).click();
    cy.wait(1000);
    cy.get(selectors.filterBtn).click();
    cy.get(selectors.sortFilter).click();
    cy.get(selectors.selectFilterOption).eq(9).click();
  }

  AddContact() {
    cy.wait(2000);
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.wait(1000);
    cy.get(selectors.tableRow).eq(-1).click();
    cy.wait(60000);
    cy.get(selectors.addContact).click();
    cy.wait(1000);
    cy.get(selectors.addExisting).click();
    cy.wait(2000);
    cy.get(selectors.selectContact).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.addSelected).eq(0).click();
    cy.wait(2000);
  }

  EditTextKeyword() {
    cy.wait(60000)
    cy.get(selectors.editKeyword).click();
  }

  Print() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(0).click();
    cy.wait(4000)
  }

  Export() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(1).click();
    cy.wait(4000);
  }

  EditGroupName() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.editNameInput).type('Edited');
    cy.wait(1000);
    cy.get(selectors.saveEditName).click();
    cy.wait(4000);
  }

  DeactivateContacts() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(4).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
    cy.wait(2000);
  }

  ActivateContacts() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(3).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
    cy.wait(2000);
  }

  SmsOptEmail() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(6).click();
    cy.wait(2000);
    cy.get('#mat-menu-panel-4 > .mat-menu-content > :nth-child(2)').click()
    cy.get(selectors.confirmDel).click();
    cy.wait(2000);
  }

  SmsOptText() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(6).click();
    cy.wait(2000);
    cy.get('#mat-menu-panel-4 > .mat-menu-content > :nth-child(1)').click()
    cy.get(selectors.confirmDel).click();
    cy.wait(2000);
  }

  ExportSmsNonOpt() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(7).click();
    cy.wait(4000);
  }

  ExportBadContacts() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(8).click();
    cy.wait(4000);
  }

  RemoveBadNumbers() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(9).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
    cy.wait(4000);
  }

  DeleteContacts() {
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectContact).eq(-2).click();
    cy.wait(1000);
    cy.get(selectors.deleteContact).click();
    cy.wait(1000);
    cy.get(selectors.confirmDel).click();
  }

  AddContactManually() {
    cy.wait(5000)
    cy.get(selectors.tableRow).eq(-1).scrollIntoView();
    cy.get(selectors.tableRow).eq(-1).click();
    cy.get(selectors.addContact).click();
    cy.contains(selectors.addManually).click();
    cy.get(selectors.addManuallyOption).eq(0).click();
    cy.wait(500)
    //cy.get(selectors.selectFilterOption).eq(0).click();
    cy.get(selectors.addManuallyInputs).eq(1).type(`Kristen${Math.ceil(Math.random() * 999999).toString()}`);
    cy.get(selectors.addManuallyInputs).eq(2).type(`Test${Math.ceil(Math.random() * 999999).toString()}`);
    cy.get(selectors.addManuallyInputs).eq(3).type('3214567865');
    cy.get(selectors.addManuallyInputs).eq(4).type('test@gmail.com');
    cy.get(selectors.saveEditName).click();
  }

  AllContacts() {
    cy.wait(5000)
    cy.get(selectors.allContactsTab).eq(1).click();
    cy.wait(1000);
  }

  CheckContacts() {
    cy.wait(1000);
    cy.get(selectors.allContactsHeads).eq(0).should('exist');
    cy.wait(1000);
    cy.get(selectors.allContactsHeads).eq(1).should('exist');
    cy.wait(1000);
    cy.get(selectors.allContactsHeads).eq(2).should('exist');
    cy.wait(1000);
    cy.get(selectors.allContactsHeads).eq(3).should('exist');
    cy.wait(1000);
  }

  SearchContact() {
    cy.get(selectors.contactSearchBtn).click();
    cy.get(selectors.searchInput).type('Test');
  }

  DeleteAllContacts() {
    cy.wait(60000)
    cy.get(selectors.moreOptionsBtn).click();
    cy.wait(1000);
    cy.get(selectors.menuOptions).eq(8).click();
    cy.wait(1000);
    cy.get(selectors.discardBtn).eq(-1).click({ force: true });
    cy.wait(1000);
  }

  ToggleContact() {
    cy.get(selectors.toggleBtn).eq(0).click({ force: true });
    cy.get(selectors.toggleBtn).eq(0).click({ force: true });
  }

  DeleteIcon() {
    cy.get(selectors.allContactsTab).eq(0).click();
    cy.get(selectors.allContactsTab).eq(1).click();
    cy.get(selectors.deleteIcon).eq(0).click({ force: true });
    cy.get(selectors.closeModalBtn).click();
  }

  ContactProfile() {
    cy.get('.member-name').contains('Kristen').click();
  }

  EditPicture() {
    cy.get(selectors.editPicture).selectFile("512.png", { force: true });
  }

  EditName() {
    cy.get(selectors.firstNameInput).clear().type("Contact1");
    cy.get(selectors.lastNameInput).clear().type("Edited");
  }

  ToggleActive() {
    cy.get(selectors.toggleBtn).eq(0).click();
    cy.get(selectors.toggleBtn).eq(0).click();
  }

  EditPhoneNumber() {
    cy.get(selectors.noBorderBtn).eq(1).click();
    cy.get(selectors.phoneInput).eq(-1).type('5834512345');
    cy.get(selectors.selectInput).eq(1).click();
    cy.get(selectors.selectOption).eq(1).click();
  }

  EditEmailAddress() {
    cy.get(selectors.noBorderBtn).eq(2).click();
    cy.get(selectors.emailInput).eq(-1).type('test@gmail.com');
    cy.get(selectors.selectInput).eq(2).click();
    cy.get(selectors.selectOption).eq(1).click();
  }

  EditAddress() {
    cy.get(selectors.noBorderBtn).eq(3).click();
    cy.get(selectors.streetInput).eq(-1).type('test 1');
    cy.get(selectors.zipInput).eq(-1).type('00000');
    cy.get(selectors.selectInput).eq(2).click();
    cy.get(selectors.selectOption).eq(1).click();
  }

  ContactDelete() {
    cy.get(selectors.noBorderBtn).eq(-1).click();
    cy.get(selectors.cancelDeleteBtn).click();
  }

  SaveContact() {
    cy.get(selectors.saveContactProfile).click();
  }
}

export default GroupsAndContacts;
