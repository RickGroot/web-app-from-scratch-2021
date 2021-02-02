function fetchSubreddits(sub) {
    fetch('https://www.reddit.com/r/' + sub + '/random/.json')
        .then(response => response.json())
        .then(content => checkImage(content));
}

async function checkImage(data) {
    let post = await data[0].data.children[0].data;
    // console.log("NEW!!!!!!!!!!!!!!")

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
    } else if (post.ups < 100) {
        fetchSubreddits(getSubreddit())
    } else {
        show(post); // calls function which renders the image
        console.log(post)
    }
}

function show(post) {
    let cont = document.getElementById('list');
    let article = document.createElement('article');
    let img = document.createElement('img');
    img.src = post.url; //sets src of image
    article.id = "image1";
    article.appendChild(img);
    cont.appendChild(article);
}

// Loop below fetches 10 images from reddit API, one per second
var i = 0; //  set your counter to 0

function callFetch() {
    setTimeout(() => { //  call a 3s setTimeout when the loop is called
        fetchSubreddits(getSubreddit());

        i++; // increment the counter
        if (i < 9) { // counter will go to 10 and redo callFetch
            callFetch();
        }
    }, 1000)
}

callFetch();

function getSubreddit() {
    const subReddits = [
        'NatureIsFuckingLit',
        'travel',
        'EarthPorn',
        'natureporn'
    ];

    let random = subReddits[Math.floor(Math.random() * subReddits.length)];
    return random;
}