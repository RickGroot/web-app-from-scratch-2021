import {
    router
} from "./router.js";
import {
    details
} from "../detailpage.js";

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

export {
    appendPosts
};