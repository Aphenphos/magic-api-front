
const BASE_URL = 'http://api.scryfall.com';

export async function searchCards(uSearchInput) {
    const resp = await fetch(`${BASE_URL}/cards/search?q=%3A${uSearchInput}`, {
        method: 'GET'
    });
    if (resp.ok) {
        const data = await resp.json();
        let loopAmount = Math.min(data.total_cards, 100);
        let cards = [];
        let defaultImage = '/utils/assets/default-image.webp';
        for (let i = 0; i < loopAmount; i++) {
            let cardPic = defaultImage;
            let cardID = data.data[i].id;
            console.log(cardID);
            if (data.data[i].image_uris !== undefined) {
                cardPic = data.data[i].image_uris.normal;
            }
            cards.push({
                id: cardID,
                image_uri: cardPic 
            });
        }
        console.log(cards);
        return cards;
    }
} 

export async function getCard(cardID) {
    const resp = await fetch(`${BASE_URL}/cards/${cardID}`, {
        method: 'GET'
    });
    if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        return data;
    }
}

export async function getCardByParams(type) {
    const resp = await fetch(`${BASE_URL}/cards/search?q=%3A${type}`, {
        method: 'GET'
    });
    if (resp.ok) {
        const data = await resp.json();
        let loopAmount = Math.min(data.total_cards, 100);
        let cards = [];
        let defaultImage = '/utils/assets/default-image.webp';
        for (let i = 0; i < loopAmount; i++) {
            let cardPic = defaultImage;
            let cardID = data.data[i].id;
            console.log(cardID);
            if (data.data[i].image_uris !== undefined) {
                cardPic = data.data[i].image_uris.normal;
            }
            cards.push({
                id: cardID,
                image_uri: cardPic 
            });
        }
        console.log(cards);
        return cards;
    }
}








 

 
