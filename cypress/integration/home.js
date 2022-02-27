import {Home} from "../pageObject/home";

describe("Appointment Booking", () => {
    const home = new Home()

    beforeEach( () => {
        home.navigate()
    })

    it("Validate Appointment Booking Heading", () => {
        home.getHeading().contains('Appointment Management')
    })



})