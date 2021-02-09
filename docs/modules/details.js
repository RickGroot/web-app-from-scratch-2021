export function details(post) {
    console.log(post)
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Ups:' + post.ups);

    // a.setAttribute('target', '_blank');
    // a.setAttribute('href', prefix + post.permalink);
    p.appendChild(text);
    cont.appendChild(p);
}