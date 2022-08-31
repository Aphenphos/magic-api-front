import renderCardDetails from '../components/renderCard.js';
import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logoutUser();
});

import { getCard } from '../utils/scryfall-utils.js';

const paramsString = window.location.search;
const params = new URLSearchParams(paramsString);
const cardID = params.get('id');
const cardPin = document.querySelector('#pin');
console.log(params.get('id'));
let card = { };

async function handlePageLoad() {
    redirectNonUsers();
    card = await getCard(cardID);
    renderCardDetails(card, cardPin);
}



handlePageLoad();