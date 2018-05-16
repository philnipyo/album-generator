import axios from 'axios';
import { unsplashAccessKey, CORS } from '../config'; 

export async function getRandomImage() {
    try {
        const result = await axios(`${CORS}https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`);
        let image = result.data.urls.small;

        console.log(image);
    } catch(error) {
        console.log(error);
    }
}