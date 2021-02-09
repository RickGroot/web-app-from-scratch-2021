import {
    router
} from "./router.js";
import {
    details
} from "./details.js";

function appendPosts(post) {
    let cont = document.getElementById('list');
    let article = document.createElement('article');
    let img = document.createElement('img');
    img.src = post.url; //sets src of image
    article.id = "image1";
    article.appendChild(img);
    article.onclick = () => {
        router('post/' + post.id); // defines route
        location.href = "/#post/" + post.id; // changes your url
        details(post); // renders details page
    }
    cont.appendChild(article);
}

function appendSource(post) {
    const prefix = 'https://www.reddit.com';
    let cont = document.getElementById('sources');
    let a = document.createElement('a');
    let text = document.createTextNode('Post by:' + post.author);

    a.setAttribute('target', '_blank');
    a.setAttribute('href', prefix + post.permalink);
    a.appendChild(text);
    cont.appendChild(a);
}

export {
    appendPosts,
    appendSource
};