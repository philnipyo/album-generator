import axios from 'axios';
import { unsplashAccessKey, CORS } from '../config';
import { elements } from '../views/base';

export async function getRandomImage() {
    try {
        const result = await axios(`${CORS}https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`);
        let image = result.data.urls.small;

        elements.image.src=(image);
    } catch(error) {
        console.log(error);
    }
}