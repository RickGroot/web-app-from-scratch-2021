let data = [];

function saveJSON(obj) {
    data.push(obj);
    // console.log(data)
}

function cleanJSON() {
    data = [];
}

export { saveJSON, cleanJSON, data };