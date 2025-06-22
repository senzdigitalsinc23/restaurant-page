
import { createElements, attachElements, setAttributes } from "./create-elements";

import menupic from "./assets/images/restaurant-menu-pic.png";

const menucontainer = (() => {
    let menucontainer = createElements('div', 'menuinner');

    return menucontainer;
})();

const menuImage = (() => {
    let img = createElements('img', 'menuimage');

    setAttributes({'src': menupic}, img)
    return img;
})();

const menuItems = (() => {
    let menuItemsContainer = createElements('div', 'menuitemscont');

    return menuItemsContainer;
})();

let itemOne = (() => {
    let itemsdiv = createElements('div', 'itemsdiv');
    let menu = createElements('div', 'menu', 'MENU')
    let itemTitle = createElements('div', 'itemtitle', 'Local Dishes');
    let riceAndStew = createElements('div', 'riceandstew', '1. Rice & Stew - Ghs35.00');
    let fufuAndLightSoup = createElements('div', 'fufulightsoup', '2. Fufu With Light Soup - Ghs50.00');
    let fufuAndPalmnutSoup = createElements('div', 'fufupalmsoup', '3. Fufu With Palmnut Soup - Ghs50.00');
    let fufuAndGroundnutSoup = createElements('div', 'fufugroundnutsoup', '4. Fufu With Light Soup - Ghs50.00')
    let friedrice = createElements('div', 'friedrice', '5. Fried Rice & Chicken - Ghs60.00');
    let jellofrice = createElements('div', 'jellofrice', '6. Jellof Rice & Chicken - Ghs60.00')


    attachElements(itemsdiv, [
        menu, itemTitle, riceAndStew, fufuAndLightSoup,
        fufuAndPalmnutSoup, fufuAndGroundnutSoup,friedrice, jellofrice 
    ])

    return itemsdiv;

})();

let itemTwo = (() => {
    let itemsdiv = createElements('div', 'itemsdiv');
    let itemTitle = createElements('div', 'itemtitle', 'Continental Dishes');
    let riceAndStew = createElements('div', 'riceandstew', '1. Baicon Burgar - Ghs98.00');
    let fufuAndLightSoup = createElements('div', 'springrolls', '2. East West Spring Rolls - Ghs60.00');
    let fufuAndPalmnutSoup = createElements('div', 'paneersteak', '3. Paneer Steak - Ghs60.00');
    let roastedturkey = createElements('div', 'roastedturkey', '4. Roast Turkey With Cranberry Sauce - Ghs50.00')

    attachElements(itemsdiv, [
        itemTitle, riceAndStew, fufuAndLightSoup,
        fufuAndPalmnutSoup, roastedturkey
    ])

    return itemsdiv;

})();

export const  menu = (() => {
    let menu = createElements('div', 'menudiv');

    attachElements(menuItems, [itemOne, itemTwo])
    attachElements(menucontainer, [menuImage, menuItems])
    attachElements(menu, [menucontainer])


    return menu;

})();