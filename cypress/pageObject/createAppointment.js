import {sym} from "enzyme/build/Utils";

export class CreateAppointment {
    constructor() {
        this.petName = "input[data-testid=\"pet\"]"
        this.ownerName = "input[data-testid=\"owner\"]"
        this.date = "input[data-testid=\"date\"]"
        this.time = "input[data-testid=\"time\"]"
        this.symptoms = "textarea[data-testid=\"symptoms\"]"
        this.addAppointment = "button[data-testid=\"btn-submit\"]"
        this.alertMessage = "p[data-testid=\"alert\"]"
    }

    typePetName(pName){
        return cy.get(this.petName).type(pName)
    }
    typeOwnerName(ownerName){
        return cy.get(this.ownerName).type(ownerName)
    }
    enterDate(date){
        return cy.get(this.date).type(date)
    }
    enterTime(time){
        return cy.get(this.time).type(time)
    }
    typeSymptoms (symptoms){
        return cy.get(this.symptoms).type(symptoms)
    }
    clickAppointment (){
        return cy.get(this.addAppointment).click()
    }
    getValidateMsg (){
        return cy.get(this.alertMessage)
    }



}