import {Home} from "../pageObject/home";

describe("create Appointment Booking", () => {
    const home = new Home()
    const createAppointment = home.getAppointmentForm()
    const listOfBooking = home.getListOfBooking()

    beforeEach( () => {
        home.navigate()
    })

    it ("Verify Successfull Booking", () =>{
        createAppointment.typePetName("Dog")
        createAppointment.typeOwnerName("Test")
        createAppointment.enterDate("2022-02-28")
        createAppointment.enterTime("11:30")
        createAppointment.typeSymptoms("TestSymptoms")
        createAppointment.clickAppointment()

        listOfBooking.getBooking().first().should('contain','Pet: Dog')
            .should ('contain','Owner: Test')
            .should ('contain','Date: 2022-02-28')
            .should ('contain','Time: 11:30')
            .should ('contain','Symptoms: TestSymptoms')

    })

    it ("Verify Missing Entries in Booking", () =>{
        createAppointment.typePetName("Dog")
        createAppointment.typeOwnerName("Test")
        createAppointment.enterDate("2022-02-28")
        createAppointment.enterTime("11:30")
        createAppointment.clickAppointment()

        createAppointment.getValidateMsg().contains("All fields are required")
    })



})