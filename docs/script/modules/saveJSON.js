let data = [];

//saves data into JSON object
function saveJSON(obj) {
    data.push(obj);
}

//cleans JSON on page reload
function cleanJSON() {
    data = [];
}

export { saveJSON, cleanJSON, data };