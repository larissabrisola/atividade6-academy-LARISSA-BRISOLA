export default class RegisterPage {
    inputName = "#name";
    inputEmail = "#email";
    buttonSalvar = ".sc-kpDqfm";
    backToHome = "#root > div.sc-aXZVg.iYVcAu > div > a.sc-gEvEer.fGGZSe"

    //
    typeName(name) {
      cy.get(this.inputName).type(name);
    }
  
    typeEmail(email) {
      cy.get(this.inputEmail).type(email);
    }
  
    clickButtonSalvar() {
      cy.get(this.buttonSalvar).click();
    }
    
    clickBackToHome (){
      cy.get(this.backToHome).click()
    }
  }