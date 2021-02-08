import { category } from "./category.js"

// gets the right subreddit
export function getSubreddit() {
    let random;

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
        return random;
    }
    console.log(random)
    return random;
}