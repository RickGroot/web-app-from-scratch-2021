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
    let img = document.getElementById('postimg');
    img.src = post.url; //sets src of image
    console.log(post)
}

function appendData(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Likes: ' + post.ups);

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