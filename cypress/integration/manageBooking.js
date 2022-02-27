import {Home} from "../pageObject/home";

describe ("delete Appointment Booking",() =>{

    const home = new Home()
    const createAppointment = home.getAppointmentForm()
    const listOfBooking = home.getListOfBooking()

    beforeEach( () => {
        home.navigate()
    })

    it ("Verify Successful Deletion of Booking", () =>{
        createAppointment.typePetName("Dog1")
        createAppointment.typeOwnerName("Test1")
        createAppointment.enterDate("2022-02-28")
        createAppointment.enterTime("11:30")
        createAppointment.typeSymptoms("TestSymptoms1")
        createAppointment.clickAppointment()

        listOfBooking.getBooking().first().should('contain','Pet: Dog1')
            .should ('contain','Owner: Test1')
            .should ('contain','Date: 2022-02-28')
            .should ('contain','Time: 11:30')
            .should ('contain','Symptoms: TestSymptoms1')

        listOfBooking.getDeleteBooking().first().click()

      /*  listOfBooking.getBooking().first().should('not.contain','Pet: Dog1')
            .should ('not.contain','Owner: Test1')
            .should ('not.contain','Date: 2022-02-28')
            .should ('not.contain','Time: 11:30')
            .should ('not.contain','Symptoms: TestSymptoms1') */

        listOfBooking.getDeleteBooking().should('not.exist')

    })





})