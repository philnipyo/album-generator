import axios from 'axios';
import { CORS } from './config';

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

getRandomPage();