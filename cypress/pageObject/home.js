import {findRenderedComponentWithType} from "react-dom/test-utils";
import {CreateAppointment} from "./createAppointment";
import {ManageBooking} from "./manageBooking";

export class Home{

    constructor() {
        this.url = "http://localhost:3000/"
        this.heading = "*[data-testid=\"app-name\"]"
        this.addAppointment = new CreateAppointment()
        this.listOfBooking = new ManageBooking()
    }

    navigate(){
        cy.visit(this.url)
    }

    getHeading(){
        return cy.get(this.heading)
    }

    getAppointmentForm(){
        return this.addAppointment
    }

    getListOfBooking(){
        return this.listOfBooking
    }
}