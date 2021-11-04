import { deleteReservation, getReservations } from "./dataAccess.js"

const convertReservationToListElement = (reservation) => {
    return `<li>${reservation.date} - ${reservation.childName}'s party of ${reservation.numOfChildren} on ${reservation.date} requested by ${reservation.parentName} <button id='reservation--${reservation.id}'>Deny</button></li>`
}



export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map(convertReservationToListElement).join("")
            }
        </ul>
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("reservation--")) {
            const [,reservationId] = click.target.id.split("--")
            deleteReservation(parseInt(reservationId))
        }
    }
)