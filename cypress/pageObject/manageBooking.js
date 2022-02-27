export class ManageBooking{

    constructor() {
        this.listOfBooking = "div[data-testid=\"appointment\"]"
        this.deleteBooking = "button[data-testid=\"btn-delete\"]"
    }

    getBooking(){
        return cy.get(this.listOfBooking)
    }

    getDeleteBooking(){
        return cy.get(this.deleteBooking)
    }
}