export async function checkIfNull(defaultValue, ifNotNull) {
    let displayedValue = defaultValue;
    if (ifNotNull !== null || undefined) {
        displayedValue = ifNotNull;
    }
    return displayedValue;
}

export async function displayPrices(USD, USDFoil, EUR, EURFoil) {
    let USDnull = await checkIfNull('', USD);
    let USDFoilnull = await checkIfNull('', USDFoil);
    let EURnull = await checkIfNull('', EUR);
    let EURFoilnull = await checkIfNull('', EURFoil);

    if (USDnull !== '') {
        USDnull = `$${USDnull}`;
    }
    if (USDFoilnull !== '') {
        USDFoilnull = `$${USDFoilnull}`;
    }
    if (EURnull !== '') {
        EURnull = `€${EURnull}`;
    }
    if (EURFoilnull !== '') {
        EURFoilnull = `€${EURFoilnull}`;
    }
    const displayedValue = `${USDnull}  ${USDFoilnull}  ${EURnull}  ${EURFoilnull}`;
    return displayedValue;
}

export async function displayLegalities(legalities) {
    let input = legalities.toString();
    let displayedValue = input.replaceAll('not_legal', '❌\n')
        .replaceAll('banned,', '⦻\n')
        .replaceAll('legal', '✅\n')
        .replaceAll('restricted', '⚠\n')
        .replaceAll(',', '');
    return displayedValue;
}

export async function addCardFromPreview(cardSKID) {
    

}