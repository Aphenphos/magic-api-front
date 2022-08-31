import renderCardDetails from '../components/renderCard.js';
import { getCard } from '../utils/scryfall-utils.js';

const paramsString = window.location.search;
const params = new URLSearchParams(paramsString);
params.get('id');
console.log(params.get('id'));
let card = { };

async function handlePageLoad() {
    card = await getCard(params.get('id'));
    RenderCard();
}

const RenderCard = renderCardDetails(card);

handlePageLoad();