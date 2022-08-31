import renderCardDetails from '../components/renderCard.js';
import { getCard } from '../utils/scryfall-utils.js';

const paramsString = window.location.search;
const params = new URLSearchParams(paramsString);
const cardID = params.get('id');
const cardPin = document.querySelector('#pin');
console.log(params.get('id'));
let card = { };

async function handlePageLoad() {
    card = await getCard(cardID);
    renderCardDetails(card, cardPin);
}



handlePageLoad();