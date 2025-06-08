import { header } from "./header.js";
import { createElements, attachElements } from "./create-elements.js";
import { home } from "./homepage.js";

export const render = (() => {
    let element = createElements('div');

    attachElements(element, [header, home])

    return element;
})();