import createDecks from '../components/renderDecks.js';
import { getDecks } from '../utils/deck-utils.js';
import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';
let decks = [];
const deckContainer = document.getElementById('deck-container');

async function handlePageLoad() {
    await redirectNonUsers();
    decks = await getDecks();
    CreateDecks(decks);
}

const logOutButton = document.getElementById('logout');


logOutButton.addEventListener('click', async () => {
    await logoutUser();
});

const CreateDecks = createDecks(deckContainer);

handlePageLoad();