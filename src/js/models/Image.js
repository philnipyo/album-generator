import axios from 'axios';
import { unsplashAccessKey, CORS } from '../config';
import { elements } from '../views/base';

// Get random image from Unsplash API to serve as album image
export async function getRandomImage() {
    try {
        const result = await axios(`${CORS}https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`);
        let image = result.data.urls.small;

        elements.image.src=(image);
    } catch(error) {
        console.log(error);
    }
}

export const clearImage = () => {
    elements.image.src='';
}