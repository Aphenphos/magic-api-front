const signUpForm = document.getElementById('user-input');
const signInForm = document.getElementById('existing-user-input');
import { signUpUser, signInUser, redirectLoggedInUsers } from './utils/user-utils.js';


async function onPageLoad() {
    redirectLoggedInUsers();
}

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    signUpForm.reset();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    signInForm.reset();
});

onPageLoad();  