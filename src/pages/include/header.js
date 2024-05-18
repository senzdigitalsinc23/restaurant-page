import { createElements, setAttributes, attachElements } from "../../app/create-elements";

const header = () => {
    const header = createElements('header');
    const nav = createElements('nav');
    const ul =  createElements('ul');
    const logoContainer = createElements('div')
    const logo = createElements('img')
    const navLinksContainer = createElements('div');

    const navLinks = ["Home", "Menu", "Contact", "About Us"]

    setAttributes({'class': 'main-header'}, header);
    setAttributes({'class': "navbar"}, nav);
    setAttributes({'src': "../../../public/assets/images/logo2.jpg"}, logo);

    navLinks.map(nav => {

        const li = createElements('li', `${nav}`); 
        const button = createElements('button');
        
        setAttributes({'id': nav.toLowerCase().replace(" ", "-")}, button)

        attachElements(button, li);
        attachElements(ul, button);
    })


    attachElements(logoContainer, logo)
    attachElements(nav, ul);
    attachElements(navLinksContainer, nav)
    attachElements(header, [logoContainer, navLinksContainer]);


    return header;
}

export default header;