import './styles/style.css';
import { fetchWeather } from './modules/weatherAPI.js';
import { navbar } from './modules/navbar.js';

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function() {
    body.appendChild(navbar()); //navbar
    // body.appendChild() //home page load
    // let btn = document.createElement("button");
    // btn.textContent = "Click me!";
    // body.appendChild(btn);
    // btn.addEventListener("click", fetchWeather);
});
