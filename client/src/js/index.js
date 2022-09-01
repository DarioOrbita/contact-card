//import modules
import "./form.js";
import "./submit.js";
import "./database.js"

//import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

//import css
import "../css/index.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initDb } from "./database.js";


window.addEventListener('load', function () {
    initDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });