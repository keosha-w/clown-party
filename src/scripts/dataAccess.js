const mainContainer = document.querySelector("#container")
// this is application state. It holds the external data when you fetch it. 
const applicationState = {
    reservations: []
}

//this is the HTTP GET request with Fetch
const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservations) => {
                // Store the external state in application state
                applicationState.reservations = reservations
            }
        )
}


//export function that returns a copy of the reservations state
export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}



//this is the POST method tells API to create a reservation state object to be saved in permanent state & returning the application state for reservations

export const sendRequest = (userReservation) => {
    const fetchOptions = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

    return fetch (`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
