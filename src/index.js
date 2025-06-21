import "./assets/css/reset.css";
import "./assets/css/styles.css";

import { render } from "./renderpage.js";
import { home } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";


import { attachElements } from "./create-elements.js";

const element = render;

const btnhome = document.querySelector('#btnhome');
const btnmenu = document.querySelector('#btnmenu');
const btnabout = document.querySelector('#btnabout'); 

btnhome.addEventListener('click', () => {
    attachElements(element, home);

    menu.style.display = 'none'
    about.style.display = 'none'
    home.style.display = ''  
});

btnmenu.addEventListener('click', () => {
    attachElements(element, menu);
    
    home.style.display = 'none';
    menu.style.display = ''
    about.style.display = 'none'
})

btnabout.addEventListener('click', () => {
    attachElements(element, about);
    
    home.style.display = 'none';
    menu.style.display = 'none'
    about.style.display = ''
})