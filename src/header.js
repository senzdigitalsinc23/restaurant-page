import { createElements, attachElements } from "./create-elements.js";

export const header = (() => {
    let header = createElements("header", 'header');
    let ul = createElements("ul");
    let nav = createElements("nav");
    let homeli = createElements("li", 'homeli');
    let menuli = createElements("li", 'menuli');
    let aboutli = createElements("li", 'aboutli');
    let btnHome = createElements("button", 'btnhome', "Home");
    let btnMenu = createElements("button", "Menu", 'btnmenu');
    let btnAbout = createElements("button", 'btnabout', "About");
    
    attachElements(homeli, btnHome);
    attachElements(menuli, btnMenu);
    attachElements(aboutli, btnAbout);
    attachElements(ul, [homeli, menuli, aboutli]);
    attachElements(nav, ul);
    attachElements(header, nav);

    return header;
})();