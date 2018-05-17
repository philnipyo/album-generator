import axios from 'axios';
import { elements } from '../views/base';

// Get random quote from Tadas Talaikis' API to serve as album name based on tbe last 3-5 words
export async function getRandomQuote() {
    try {
        const result = await axios('https://talaikis.com/api/quotes/random/');
        let quote = result.data.quote;
        let q = JSON.stringify(quote).split(' ');
        let i = Math.floor((Math.random() * 3) + 3); //Better way to select the last 3-5 words; (max-min + 1) + min -> 5 - 3 + 1 = 3;

        let name = q.slice(q.length - i, q.length).join(' ');
        name = name.replace(".\"", '');
        name = name.charAt(0).toUpperCase() + name.slice(1);

        elements.album.insertAdjacentHTML('afterbegin', name);
    } catch(error) {
        console.log(error);
    }
}

export const clearQuote = () => {
    elements.album.innerHTML = '';
}