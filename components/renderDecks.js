export default function createDecks(root) {
    return (decks) => {
        root.innerHTML = '';
        for (const deck of decks) {
            root.append(Deck({ deck }));
        }
    };
}

function Deck({ deck }) {
    const container = document.createElement('div');
    container.classList.add('deck');

    const a = document.createElement('a');
    a.classList.add('deck-link');
    a.href = `/deck/index.html?id=${deck.id}`;
    a.textContent = deck.name;

    container.append(a);

    return container;
}