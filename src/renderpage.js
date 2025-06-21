import { header } from "./header.js";
import { createElements, attachElements } from "./create-elements.js";
import { home } from "./homepage.js";

const contents = document.querySelector('#content');
const element = createElements('div');

export const render = (() => {    

    attachElements(element, [header, home]);

    return element;
})();

contents.appendChild(render)