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

btnhome.style.backgroundColor = "rgb(209, 252, 143)";
btnhome.style.color = "palevioletred";

btnmenu.style.backgroundColor = "beige";
btnmenu.style.color = "black";
btnabout.style.backgroundColor = "beige";
btnabout.style.color = "black";

btnhome.addEventListener('click', () => {
    attachElements(element, home);

    menu.style.display = 'none'
    about.style.display = 'none'
    home.style.display = ''  

    btnhome.style.backgroundColor = "rgb(209, 252, 143)";
    btnhome.style.color = "palevioletred";

    btnmenu.style.backgroundColor = "beige";
    btnmenu.style.color = "black";
    btnabout.style.backgroundColor = "beige";
    btnabout.style.color = "black";
});

btnmenu.addEventListener('click', () => {
    attachElements(element, menu);
    
    home.style.display = 'none';
    menu.style.display = ''
    about.style.display = 'none'

    btnmenu.style.backgroundColor = "rgb(209, 252, 143)";
    btnmenu.style.color = "palevioletred";

    btnhome.style.backgroundColor = "beige";
    btnhome.style.color = "black";
    btnabout.style.backgroundColor = "beige";
    btnabout.style.color = "black";
})

btnabout.addEventListener('click', () => {
    attachElements(element, about);
    
    home.style.display = 'none';
    menu.style.display = 'none'
    about.style.display = ''

    btnabout.style.backgroundColor = "rgb(209, 252, 143)";
    btnabout.style.color = "palevioletred";

    btnmenu.style.backgroundColor = "beige";
    btnmenu.style.color = "black";
    btnhome.style.backgroundColor = "beige";
    btnhome.style.color = "black";
})