export default function createCards(root) {
    return (cards) => {
        root.innerHTML = '';
        for (const card of cards) {
            root.append(Card({ card }));
        }
    };
}

function Card({ card }) {
    const a = document.createElement('a');
    a.classList.add('card');
    a.href = `/card/index.html?id=${card.id}`;

    const img = document.createElement('img');
    img.src = card.image_uri;
    img.classList.add('card-preview');

    const addCardButton = document.createElement('button');
    addCardButton.textContent = 'Add Card';
    addCardButton.classList.add('addButton');

    a.append(img, addCardButton);
    
    return a;
}