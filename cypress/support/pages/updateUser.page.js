export default class UpdateUserPage {
  inputUserName = "#userName";
  inputUserEmail = "#userEmail";
  buttonEdit =
    "#root > div.sc-eldPxv.gkYUqH > div > form > div.sc-dhKdcB.lmheQr > button:nth-child(1) > div";
  buttonSave = "button[type=submit]";
  buttonCancel = "#root > div.sc-eldPxv.gkYUqH > div > form > div.sc-dhKdcB.lmheQr > button.sc-kpDqfm.cEXnaz";

  prevPage = "#root > div.sc-aXZVg.iYVcAu > div > a.sc-gEvEer.fGGZSe";
  userID = ".sc-dLMFU Mcjyi";

  clearUserName() {
    cy.get(this.inputUserName).clear();
  }  
  clearUserEmail() {
    cy.get(this.inputUserEmail).clear();
  }
  typeUserName(userName) {
    cy.get(this.inputUserName).type(userName);
  }
  typeUserEmail(userEmail) {
    cy.get(this.inputUserEmail).type(userEmail);
  }
  clickButtonEdit() {
    cy.get(this.buttonEdit).click();
  }
  clickButtonSave() {
    cy.get(this.buttonSave).click();
  }
  clickPrevPage() {
    cy.get(this.prevPage).click();
  }
  clickButtonCancel() {
    cy.get(this.buttonCancel).click();
  }

  getInputUserName (){
    cy.get(this.inputUserName)
  }

  getInputUserEmail (){
    cy.get(this.inputUserEmail)
  }
}
