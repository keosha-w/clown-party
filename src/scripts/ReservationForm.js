import { sendRequest } from "./dataAccess.js"



//this function builds the HTML that contains user input fields for all the information that needs to be collected for a person to reserve a clown for a party
export const ReservationForm = () => {
    let html = `

        <section id="form">
            <div class="field">
                <label class="label" for="parentName">Parent Name</label>
                <input type="text" name="parentName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="childName">Child Name</label>
                <input type="text" name="childName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="address">Address</label>
                <input type="text" name="address" class="input" />
            </div>
            <div class="field">
                <label class="label" for="numOfChildren">Number of children attending</label>
                <input type="number" name="numOfChildren" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceDate">Date needed</label>
                <input type="date" name="serviceDate" class="input" />
            </div>
            <div class="field">
                <label class="label" for="duration">Party Duration</label>
                <input type="number" name="duration" class="input" />
            </div>
        </section>

        <button class="button" id="submitRequest">Submit Request</button>


    `

    return html
}


//This event listener collects the user input, constructs a state object for the reservation
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const userAddress = document.querySelector("input[name='address']").value
        const childrenAttending = document.querySelector("input[name='numOfChildren']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const childName = document.querySelector("input[name='childName']").value
        const timeframe = document.querySelector("input[name='duration']").value
        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            numOfChildren: childrenAttending,
            address: userAddress,
            date: userDate, 
            timeframe: timeframe,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
         
    }
})