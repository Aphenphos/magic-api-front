import createDeck from '../components/renderDeck.js';
import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';
import { getDeckWithCards } from '../utils/deck-utils.js';

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logoutUser();
});


const paramsString = window.location.search;
const params = new URLSearchParams(paramsString);
const deckID = params.get('id');
const deckPin = document.querySelector('#pin');
let cards = [{}];

async function handlePageLoad() {
    redirectNonUsers();
    cards = await getDeckWithCards(deckID);
    createDeck(deckPin);
    console.log(cards);
}



handlePageLoad();