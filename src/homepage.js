import { createElements, attachElements, setAttributes } from "./create-elements.js";

import dish from "./assets/images/jellofrice.jpg"

const meal = (() => {
    let dishImg = createElements("img", 'meal');

    setAttributes({"src": dish}, dishImg)

    return dishImg;
})()

const restaurantName = (() => {
    let name = createElements('h1', 'restaurantname', "Gilded Bite");

    return name;
})();

const cafeteria = (() => {
    let name = createElements('h3', 'cafeteria', "Cafeteria");

    return name;
})();

const brief = (() => {
    let exp = createElements('p', 'innertext', "We Serve both Local & Continental Dishes");

    return exp;
})();

const centerdiv = (() => {
    let centerdiv = createElements('div', 'homecenterdiv');

    attachElements(centerdiv, [restaurantName, cafeteria, brief])

    return centerdiv;
})()

export const home = (() => {
    let home = createElements('div', 'homepagediv');

    attachElements(home, [centerdiv, meal])
    
    return home;
})();