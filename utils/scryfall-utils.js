const BASE_URL = 'http://api.scryfall.com';

export async function searchCards(uSearchInput) {
    const resp = await fetch(`${BASE_URL}/cards/search?q=%3A${uSearchInput}`, {
        method: 'GET'
    });
    if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        return data;
    }
}