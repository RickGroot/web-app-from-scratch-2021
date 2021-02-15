import {
    router
} from "./router.js";
import {
    details
} from "../detailpage.js";

const cont = document.getElementById('list');

// sets placeholder image for loading state
if (cont.children.length === 0) {
    cont.classList.add("load");
} 

// appends an image
function appendPosts(post) {
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

    //removes placeholder when container has children
    if (cont.children.length > 0) {
        cont.classList.remove("load");
    }
}

export {
    appendPosts
};