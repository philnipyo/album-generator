import axios from 'axios';
import { CORS } from '../config';
import { elements } from '../views/base';

// Get random page from Wikipedia API to serve as artist title
export async function getRandomPage() {
    try {
        const result = await axios(`${CORS}https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`);
        let title = result.data.query.random[0].title;

        let artistHTML = `Artist name: ${title}`;

        elements.artist.insertAdjacentHTML('afterbegin', artistHTML);
    } catch(error) {
        console.log(error);
    }
}

export const clearPage = () => {
    elements.artist.innerHTML = '';
}