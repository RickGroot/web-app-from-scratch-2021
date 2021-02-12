import {
    callFetch
} from "../app.js"; // when category changes
import {
    cleanJSON
} from "./saveJSON.js";

// gets the category specified by the radio button
export let category = '';

document.getElementsByName('subreddit')
    .forEach(radio => {
        if (radio.checked) {
            category = radio.value;
        }
        radio.onclick = () => {
            category = radio.value;
            refreshContent();
        }
    })

function refreshContent() {
    let list = document.getElementById('list'); // containers that need to be refreshed
    let sources = document.getElementById('sources');
    list.innerHTML = ""; // removes html inside container
    sources.innerHTML = "";
    cleanJSON(); //resets JSON
    callFetch(); // calls another fetch for new data
}