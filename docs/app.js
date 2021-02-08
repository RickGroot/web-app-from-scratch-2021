function fetchSubreddits(sub) {
    fetch('https://www.reddit.com/r/' + sub + '/random/.json', {mode: 'cors'})
        .then(response => response.json())
        .then(content => checkImage(content))
        .catch(function(error) {  
            console.log('Request failed', error)  
          });
}

async function checkImage(data) {
    let post = await data[0].data.children[0].data;

    // if statement below checks if the post is really an image
    if (!post || !data[0] || !data[0].data || post.is_video || post.media) {
        fetchSubreddits(getSubreddit()) // fetches another image if needed
    } else if (
        post.url.toLowerCase().includes('v.redd.it') ||
        post.url.toLowerCase().includes('gallery') ||
        post.url.toLowerCase().includes('youtu') ||
        post.url.toLowerCase().includes('comments') ||
        post.url.toLowerCase().includes('imgur')
    ) { // checks url tyes
        fetchSubreddits(getSubreddit());
    } else if (post.ups < 100) { // threshold amount of upvotes
        fetchSubreddits(getSubreddit());
    } else {
        appendPosts(post); // calls function which renders the image
        appendSource(post); // renders sources
        console.log(post);
    }
}

function appendPosts(post) {
    let cont = document.getElementById('list');
    let article = document.createElement('article');
    let img = document.createElement('img');
    img.src = post.url; //sets src of image
    article.id = "image1";
    article.appendChild(img);
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


function callFetch() {
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

function getSubreddit() {
    if (category === 'nature') {

        const subReddits = [
            'NatureIsFuckingLit',
            'travel',
            'EarthPorn',
            'natureporn'
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    } else if (category === 'cars') {

        const subReddits = [
            '4Runner',
            'carporn',
            'F1Porn',
            'RallyPorn',
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random
    }
    return random;
}

function refreshContent() {
    let list = document.getElementById('list'); // containers that need to be refreshed
    let sources = document.getElementById('sources');
    list.innerHTML = ""; // removes html inside container
    sources.innerHTML = "";
    callFetch(); // calls another fetch for new data
}

let category = '';

let radios = document.getElementsByName('subreddit')
    .forEach(radio => {
        if (radio.checked) {
            category = radio.value;
        }
        radio.onclick = () => {
            category = radio.value;
            refreshContent();
        }
    })


callFetch(); //starts everything