const BASE_URL = 'http://localhost:7890';

export async function addToDeck(deckID, card) {
    const resp = await fetch(`${BASE_URL}/api/v1/decks/add/${deckID}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(card),
        credentials: 'include',
    });
    return resp.json();
}

// export async function addToDeck(deckID, card) {
//     const resp = await fetch(`${BASE_URL}/api/v1/decks/add/${deckID}`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(card),
//         credentials: 'include',
//     });
//     return resp.json();
// }

export async function getDecks() {
    const resp = await fetch(`${BASE_URL}/api/v1/decks/user-decks`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return await resp.json();
}

export async function getDeckWithCards(deckID) {
    const resp = await fetch(`${BASE_URL}/api/v1/decks/decks-cards/${deckID}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        return console.log(resp.json());
    // return await resp.json();
    }
}