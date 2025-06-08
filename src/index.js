import "./assets/css/reset.css";
import "./assets/css/styles.css";

import { render } from "./renderpage.js";

let contents = document.querySelector('#content');

contents.appendChild(render)