import { attachElements } from "./app/create-elements";
import { clicks } from "./app/events";
import aboutUs from "./pages/about-us";
import contactUs from "./pages/contact-us";
import homepage from "./pages/home";
import footer from "./pages/include/footer";
import header from "./pages/include/header";
import menu from "./pages/menu";

const mainContainer = document.querySelector('.main-container');

function displayComponents() {
    attachElements(mainContainer, header())

    const element = document.querySelector('#content');
    
    attachElements(element, homepage())

    clicks('home').onclick = () => {
        element.textContent = ""
        attachElements(element, homepage())
    }

    clicks('menu').onclick = () => {
        element.textContent = "";
        attachElements(element, menu());
    }

    clicks('contact').onclick = () => {
        element.textContent = "";
        attachElements(element, contactUs());
    }

    clicks('about-us').onclick = () => {
        element.textContent = "";
        attachElements(element, aboutUs());
    }
    //attachElements(element, [header()]);

    return element;    
}

attachElements(mainContainer, [displayComponents(), footer()]);