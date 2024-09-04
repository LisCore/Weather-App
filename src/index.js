import './styles/style.css';
import { fetchWeather } from './modules/weatherAPI.js';
import { navbar } from './modules/navbar.js';
import { loadDefault } from './modules/loadDefault.js';
import { searchInput } from './modules/searchInput.js';

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function () {
    // body.appendChild(navbar()); //navbar
    body.insertAdjacentElement('afterbegin', navbar());
    // default should be portland, OR, and then when user searching, we can parse that in.
    loadDefault();


    // need to take the input from navbar and output to page.
    // body.appendChild() //home page load
    // let btn = document.createElement("button");
    // btn.textContent = "Click me!";
    // body.appendChild(btn);
    // btn.addEventListener("click", fetchWeather);
});
