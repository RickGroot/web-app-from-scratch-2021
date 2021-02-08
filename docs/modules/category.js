import { callFetch } from "../app.js"; // when category changes

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
    callFetch(); // calls another fetch for new data
}