import axios from 'axios';
import { unsplashAccessKey, CORS } from '../config';
import { elements } from '../views/base';

// Get random image from Unsplash API to serve as album image
export async function getRandomImage() {
    try {
        const result = await axios(`${CORS}https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`);
        let image = result.data.urls.small;
        let photographerName = result.data.user.name;
        let photographerUserName = result.data.user.username;

        //Sets image src to JSON's small image result
        elements.image.src=(image);

        // Inserts link to attribute photographer and Unsplash
        elements.photographer.insertAdjacentHTML('afterbegin', `Photo by <a href="https://unsplash.com/@${photographerUserName}?utm_source=album_creator&utm_medium=referral">${photographerName}</a> on <a href="https://unsplash.com/?utm_source=album_creator&utm_medium=referral">Unsplash</a>`);
    } catch(error) {
        console.log(error);
    }
}

export const clearImage = () => {
    elements.image.src='';
}

export const clearPhotographerInfo = () => {
    elements.photographer.innerHTML= '';
}