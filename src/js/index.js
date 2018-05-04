import axios from 'axios';
import { CORS } from './config';
import { unsplashAccessKey } from '../../api.js';

// Get random page from Wikipedia API to serve as album title
async function getRandomPage() {
    try {
        const result = await axios(`${CORS}https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`);
        let title = result.data.query.random[0].title;

        console.log(result);
        console.log(title);
    } catch(error) {
        console.log(error);
    }
}

// Get random image from Unsplash API to serve as album image
async function getRandomImage() {
    try {
        const result = await axios(`${CORS}https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`);
        let image = result.data.urls.small;

        console.log(result);
        console.log(image);
    } catch(error) {
        console.log(error);
    }
}

getRandomPage();
getRandomImage();