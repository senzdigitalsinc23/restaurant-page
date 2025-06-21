
import { createElements, attachElements } from "./create-elements";

const menucontainer = (() => {
    let menucontainer = createElements('div', 'menuinner');

    return menucontainer;
})()

export const  menu = (() => {
    let menu = createElements('div', 'menudiv');

    attachElements(menu, [menucontainer])


    return menu;

})();