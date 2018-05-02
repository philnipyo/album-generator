import axios from 'axios';

async function getRandomPage() {
    try {
        const result = await axios('https://cors-anywhere.herokuapp.com/https://www.mediawiki.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1');
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

getRandomPage();