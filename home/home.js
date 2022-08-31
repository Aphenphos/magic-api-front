import createCards from '../components/renderCards.js';
import { searchCards } from '../utils/scryfall-utils.js';
import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';

let cards = [];

function handlePageLoad() {
    redirectNonUsers();
}

const logOutButton = document.getElementById('logout');
const searchForm = document.getElementById('card-search');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    cards = [];
    const formData = new FormData(searchForm);
    cards = await searchCards(formData.get('search'));
    searchForm.reset();
    await CreateCards(cards);
});

logOutButton.addEventListener('click', async () => {
    await logoutUser();
});

const CreateCards = createCards(document.querySelector('#card-display'));

handlePageLoad();