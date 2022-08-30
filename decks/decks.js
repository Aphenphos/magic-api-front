import { logoutUser, redirectNonUsers } from '../utils/user-utils.js';


function handlePageLoad() {
    redirectNonUsers();
}

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logoutUser();
});

handlePageLoad();