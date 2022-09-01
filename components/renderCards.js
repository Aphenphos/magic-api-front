import { addCardFromPreview } from '../utils/utils.js';

export default function createCards(root) {
    return (cards) => {
        root.innerHTML = '';
        for (const card of cards) {
            root.append(Card({ card }));
        }
    };
}

function Card({ card }) {
    const container = document.createElement('div');
    container.classList.add('card');

    const a = document.createElement('a');
    a.classList.add('card-link');
    a.href = `/card/index.html?id=${card.id}`;

    const img = document.createElement('img');
    img.src = card.image_uri;
    img.classList.add('card-preview');

    const addCardButton = document.createElement('button');
    addCardButton.textContent = 'Add Card';
    addCardButton.classList.add('addButton');
    addCardButton.addEventListener('click', () => {
        const cardSKID = card.id;
        addCardFromPreview(cardSKID);
    });
    a.append(img);
    container.append(a, addCardButton);
    
    return container;
}