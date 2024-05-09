export default class UpdateUserPage {

    inputUserName = "#userName";
    inputUserEmail = "#userEmail"
    buttonEdit = ".sc-kpDqfm dGvNqp"
    buttonSave = ".sc-kpDqfm dGvNqp"
    buttonCancel = ".sc-dAlyuH jdAtLn"

    prevPage = "#root > div.sc-aXZVg.iYVcAu > div > a.sc-gEvEer.fGGZSe"
    userID = ".sc-dLMFU Mcjyi"

    typeUserName (userName){
        cy.get(this.inputUserName).type(userName);
    }
    typeUserEmail (userName){
        cy.get(this.inputUserEmail).type(userName);
    }
    clickButtonEdit(){
        cy.get(this.buttonEdit).click()
    }
    clickButtonSave(){
         cy.get(this.buttonSave).click()
    }
    clickPrevPage (){
        cy.get(this.prevPage).click()
    }
    clickButtonCancel (){
        cy.get(this.buttonCancel).click()
    }
}