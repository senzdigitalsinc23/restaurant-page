import { attachElements, createElements, setAttributes } from "../../app/create-elements";

const footer = () => {
    let footer = createElements("footer");
    let copyright = createElements('div', "Copyright © Senz Eatery 2024");

    attachElements(footer, copyright);
    
    return footer;
}

export default footer;
