// function that calls all appends
export function details(post) {
    cleanPage();
    appendImage(post);
    appendUps(post);
    appendSource(post);
}

//cleans page from earlier post clicks
function cleanPage() {
    let cont = document.getElementById('data');
    cont.innerHTML = "";
}

// appends image to page
function appendImage(post) {
    let img = document.getElementById('postimg');
    img.src = post.url; //sets src of image
    console.log(post)
}

// appends amout of upvotes
function appendUps(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Likes: ' + post.ups);

    p.appendChild(text);
    cont.appendChild(p);
}

// appends source
function appendSource(post) {
    const prefix = 'https://www.reddit.com';
    let cont = document.getElementById('data');
    let a = document.createElement('a');
    let text = document.createTextNode('Post author: ' + post.author);

    a.setAttribute('target', '_blank');
    a.setAttribute('href', prefix + post.permalink);
    a.appendChild(text);
    cont.appendChild(a);
}