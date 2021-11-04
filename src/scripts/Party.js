
import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"



//this function is for html representation of the page
export const Party = () => {
    return `
        <h1>Buttons the Clown Party Rentals</h1>
        <section class="ReservationForm">
        ${ReservationForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reservation Requests</h2>
            ${Reservations()}
        </section>
    `
}
