import axios from 'axios';
import { CORS } from './config';
import { unsplashAccessKey } from '../../api.js';
import { getRandomPage } from './models/Artist';
import { getRandomImage } from './models/Image';
import { getRandomQuote } from './models/Album';

// Get random page from Wikipedia API to serve as artist title
getRandomPage();

// Get random image from Unsplash API to serve as album image
getRandomImage();

// Get random quote from Tadas Talaikis' API to serve as album name based on tbe last 3-5 words
getRandomQuote();



