import { searchCards } from '../utils/scryfall-utils.js';
import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';


function handlePageLoad() {
    redirectNonUsers();
}

const logOutButton = document.getElementById('logout');
const searchForm = document.getElementById('card-search');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    await searchCards(formData.get('search'));
    searchForm.reset();
});

logOutButton.addEventListener('click', async () => {
    await logoutUser();
});

handlePageLoad();