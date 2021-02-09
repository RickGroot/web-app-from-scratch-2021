export function details(post) {
    cleanPage();
    appendImage(post);
    appendData(post);
    appendSource(post);
}

function cleanPage() {
    let cont = document.getElementById('data');
    cont.innerHTML = "";
}

function appendImage(post) {
    let cont = document.getElementById('data');
    let img = document.createElement('img');
    img.src = post.url; //sets src of image

    cont.appendChild(img);
}

function appendData(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Ups:' + post.ups);

    p.appendChild(text);
    cont.appendChild(p);
}

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