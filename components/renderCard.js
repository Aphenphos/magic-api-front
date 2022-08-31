const defaultImage = '/utils/assets/default-image.webp';


export default function renderCardDetails(card) {
    const container = document.createElement('div');
    container.classList.add('card-with-details');

    const image_uri = document.createElement('img');
    let cardPic = defaultImage;
    if (card.image_uris !== undefined) {
        cardPic = card.image_uris.normal;
    }
    image_uri.src = card.image_uri.normal;
    console.log(image_uri);
    
    const name = document.createElement('h2');
    name.textContent = card.name;
    console.log(card.name);


    // type_line 
    // oracle_text 
    // mana_cost 
    // cmc 
    // colors 
    // legalities 
    // set_name
    // prices 
}