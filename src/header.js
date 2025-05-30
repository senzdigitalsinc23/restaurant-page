import { createElements, attachElements } from "./create-elements.js";

export const header = () => {
    let header = createElements("header", '', 'header');
    let ul = createElements("ul");
    let nav = createElements("nav");
    let homeli = createElements("li", '', 'homeli');
    let menuli = createElements("li",  '', 'menuli');
    let aboutli = createElements("li",  '', 'aboutli');
    let btnHome = createElements("button", "Home", 'btnhome');
    let btnMenu = createElements("button", "Menu", 'btnmenu');
    let btnAbout = createElements("button", "About", 'btnabout');
    
    attachElements(homeli, btnHome);
    attachElements(menuli, btnMenu);
    attachElements(aboutli, btnAbout);
    attachElements(ul, [homeli, menuli, aboutli]);
    attachElements(nav, ul);
    attachElements(header, nav);

    return header;
}