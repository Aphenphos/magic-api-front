import { displayPrices, displayLegalities } from '../utils/utils.js';

const defaultImage = '/utils/assets/default-image.webp';


export default async function renderCardDetails(card, root) {
    const container = document.createElement('div');
    container.classList.add('card-with-details');

    const image_uri = document.createElement('img');
    let cardPic = defaultImage;
    if (card.image_uris !== undefined) {
        cardPic = card.image_uris.normal;
    }
    image_uri.src = cardPic;
    image_uri.classList.add('card-picture');

    
    const name = document.createElement('h1');
    name.textContent = card.name;

    const typeLine = document.createElement('h2');
    typeLine.textContent = card.type_line;


    const oracleText = document.createElement('h2');
    oracleText.textContent = card.oracle_text;


    const manaCost = document.createElement('h2');
    manaCost.textContent = card.mana_cost;


    const cmc = document.createElement('h2');
    cmc.textContent = card.cmc;


    const colors = document.createElement('h2');
    colors.textContent = card.colors;


    const legalities = document.createElement('h2');
    legalities.setAttribute('id', 'new-line');
    legalities.textContent = await displayLegalities(Object.entries(card.legalities));



    const setName = document.createElement('h3');
    setName.textContent = card.set_name;


    const prices = document.createElement('h2');
    prices.textContent = await displayPrices(card.prices.usd, card.prices.usd_foil, card.prices.eur, card.prices.eur_foil);


    container.append(image_uri, name, typeLine, oracleText, manaCost, cmc, colors, legalities, setName, prices);
    root.append(container);
    return container;
}