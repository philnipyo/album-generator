import axios from 'axios';
import { CORS } from './config';
import { unsplashAccessKey } from '../../api.js';
import { getRandomPage, clearPage } from './models/Artist';
import { getRandomImage, clearImage } from './models/Image';
import { getRandomQuote, clearQuote } from './models/Album';
import { elements } from './views/base';

elements.generate.addEventListener('click', e => {
    // Clear results if any
    clearImage();
    clearQuote();
    clearPage();

    // Fetch and render results
    getRandomImage();
    getRandomPage();
    getRandomQuote();
});