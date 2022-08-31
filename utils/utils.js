export async function checkIfNull(defaultValue, ifNotNull) {
    let displayedValue = defaultValue;
    if (ifNotNull !== null || undefined) {
        displayedValue = ifNotNull;
    }
    return displayedValue;
}

export async function displayPrices(USD, USDFoil, EUR, EURFoil) {
    
}