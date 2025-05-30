import "./assets/css/styles.css";

import { header } from "./header.js";

console.log(header());


let contents = document.querySelector('#content');

contents.appendChild(header())