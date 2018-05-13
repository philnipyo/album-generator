import axios from 'axios';
import { CORS } from './config';
import { unsplashAccessKey } from '../../api.js';

// Get random page from Wikipedia API to serve as artist title
async function getRandomPage() {
    try {
        const result = await axios(`${CORS}https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`);
        let title = result.data.query.random[0].title;

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

        console.log(image);
    } catch(error) {
        console.log(error);
    }
}

// Get random quote from What Does Trump Think API to serve as album name based on tbe last 3-5 words
async function getRandomQuote() {
    try {
        const result = await axios('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
        let quote = result.data.message;
        let q = JSON.stringify(quote).split(' ');
        let i = Math.floor((Math.random() * 3) + 3); //Better way to select the last 3-5 words; (max-min + 1) + min -> 5 - 3 + 1 = 3;

        let name = q.slice(q.length - i, q.length).join(' ');
        name = name.replace(".\"", '');

        console.log(quote);
        console.log(q);
        console.log(name);
    } catch(error) {
        console.log(error);
    }
}

getRandomPage();
getRandomImage();
getRandomQuote();