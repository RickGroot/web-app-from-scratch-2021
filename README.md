# Web App Fromm Scratch
**@cmda-minor-web** 2020 - 2021

<!-- Add a link to your live demo in Github Pages 🌐-->
## Live demo
https://pintreddit.netlify.app/ 

<!-- ☝️ replace this description with a description of your own work -->
## This project
Pintreddit is a simple web application for inspiration. 
This project uses the reddit API, and data from reddit and puts it into your browser. With a few categories to choose from inspiration is guaranteed! 

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
## Shiney pictures
![Week 1](https://github.com/rickgroot/web-app-from-scratch-2021/blob/main/assets/week1poster.jpg?raw=true)

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->
## Install this project
### Clone the repository

```bash
  $ git clone https://github.com/RickGroot/web-app-from-scratch-2021.git
```

### Navigate to repository and install packages

```bash
  $ cd web-app-from-scratch-2021
```

```bash
  $ npm install
```

### Start local dev environment

```bash
  $ npm run dev
```

### Build export

```bash
  $ npm run build
```

<!-- ...but how does one use this project? What are its features 🤔 -->
## Features
* Get inspired by the power of reddit
* Choose your own category
* Look at likes and other cool information about the image

| Actor Diagram           | Interaction Diagram                 |
|:-----------------------:|:-----------------------------------:|
| ![actor diagram][actor] | ![interaction diagram][interaction] |


[actor]: https://github.com/rickgroot/web-app-from-scratch-2021/blob/main/assets/ActorDiagram.png?raw=true "Actor Diagram"
[interaction]: https://github.com/rickgroot/web-app-from-scratch-2021/blob/main/assets/InteractionDiagram.jpg?raw=true "Interaction Diagram"

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## Data
A lot of data gets sent through the reddit API. In this application subreddits get defined and called. Reddit sends back a random post from the requested subreddit. Data gets modified and modulated, only correct data gets rendered to the page. Data gets checked via it's url type and amount of likes.

### JSON example
```json
{
    "hide_score": false,
    "id": "ljfawo",
    "link_flair_css_class": null,
    "link_flair_richtext": [],
    "link_flair_text": null,
    "link_flair_text_color": "dark",
    "link_flair_type": "text",
    "locked": false,
    "media": null,
    "media_embed": {},
    "mod_reports": [],
    "name": "t3_ljfawo",
    "no_follow": false,
    "num_comments": 23,
    "num_reports": null,
    "over_18": false,
    "parent_whitelist_status": "all_ads",
    "permalink": "/r/NatureIsFuckingLit/comments/ljfawo/black_rain_frog/",
    "pinned": false,
    "post_hint": "image",
    "preview": {"images": [], "enabled": true},
    "pwls": 6,
    "subreddit": "NatureIsFuckingLit",
    "subreddit_id": "t5_3gdh7",
    "subreddit_name_prefixed": "r/NatureIsFuckingLit",
    "subreddit_subscribers": 4580511,
    "subreddit_type": "public",
    "suggested_sort": "confidence",
    "thumbnail": "https://b.thumbs.redditmedia.com/JL9HCmUeXYEKTiT3_XGdaBFUOubPNRMP_74jRwHnMXo.jpg",
    "thumbnail_height": 105,
    "thumbnail_width": 140,
    "title": "🔥 Black Rain Frog 🔥",
    "top_awarded_type": null,
    "total_awards_received": 0,
    "treatment_tags": [],
    "ups": 314,
    "upvote_ratio": 0.99,
    "url": "https://i.redd.it/rolasx7rtch61.jpg",
    "url_overridden_by_dest": "https://i.redd.it/rolasx7rtch61.jpg",
}
```

### Drawbacks
The reddit API is huge, and sends you lost of information about everything that has relation to the origional post. This means that every comment, and all userdata is sent via the API. Because of this it's difficult to get the correct data into the application. Another drawback is loading speed. The objects are big, and take some time to load, especially with multiple posts. Same goes for image sizes, feched images from these posts are big file sizes and take some time to load.

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
### Rubric
[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing)

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)