import { fetchReservations } from "./dataAccess.js"
import { Party } from "./Party.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = Party()
        }
    )

}

render()

mainContainer.addEventListener(
    "stateChanged", 
    customEvent => {
        render()
    }
)