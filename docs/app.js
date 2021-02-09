// ----------------------------------------------------------------------------------------- imports
// import 'regenerator-runtime/runtime';
import { getSubreddit } from "./modules/getReddit.js";
import { category } from "./modules/category.js";
import { appendPosts, appendSource } from "./modules/append.js"

// ----------------------------------------------------------------------------------------- start function chain
export function callFetch() {
    // Loop below fetches 10 images from reddit API, one per second
    var i = 0; //  set your counter to 0

    function loop() {
        setTimeout(() => { //  call a 3s setTimeout when the loop is called
            fetchSubreddits(getSubreddit());

            i++; // increment the counter
            if (i < 9) { // counter will go to 10 and redo callFetch
                loop();
            }
        }, 500);
    }
    loop(); //activates the loop
}

// ----------------------------------------------------------------------------------------- fetches images
function fetchSubreddits(sub) {
    fetch('https://www.reddit.com/r/' + sub + '/random/.json', {mode: 'cors'})
        .then(response => response.json())
        .then(content => checkImage(content)) // modulate & check image
        .catch(function(error) {  
            console.log('Request failed', error)  
          });
}

// ----------------------------------------------------------------------------------------- modulate & check data
function checkImage(data) {
    let post = data[0].data.children[0].data;

    // if statement below checks if the post is really an image
    if (!post || !data[0] || !data[0].data || post.is_video || post.media) {
        fetchSubreddits(getSubreddit()) // fetches another image if needed
    } else if ( // checks url tyes
        post.url.toLowerCase().includes('v.redd.it') ||
        post.url.toLowerCase().includes('gallery') ||
        post.url.toLowerCase().includes('youtu') ||
        post.url.toLowerCase().includes('comments') ||
        post.url.toLowerCase().includes('imgur')
    ) {
        fetchSubreddits(getSubreddit());
    } else if (post.ups < 100) { // threshold amount of upvotes
        fetchSubreddits(getSubreddit());
    } else { // renders image data
        appendPosts(post);
        appendSource(post);
        console.log(post);
    }
}

// ----------------------------------------------------------------------------------------- function calls
callFetch()