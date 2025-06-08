import { header } from "./header.js";
import { createElements, attachElements } from "./create-elements.js";

export const render = (() => {
    let element = createElements('div');

    attachElements(element, [header])

    return element;
})();