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
    } else if (category === 'art') {

        const subReddits = [
            'Art',
            'ArtPorn',
            'Calligraphy',
            'Design',
            'drawing',
            'doodles',
            'Graffiti',
            'Illustration'
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;
    } else if (category === 'food') {

        const subReddits = [
            'food',
            'FoodPorn',
            'DessertPorn',
            'CulinaryPorn'
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;
    } else if (category === 'animal') {

        const subReddits = [
            'Aww',
            'Sneks',
            'RarePuppers',
            'wildlifephotography',
            'AnimalPorn',
            
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;
    }
    console.log(random)
    return random;
}