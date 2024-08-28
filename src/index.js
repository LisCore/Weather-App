import './styles/style.css';
import { fetchWeather } from './modules/weatherAPI.js';

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function() {
    // body.appendChild() //navbar
    // body.appendChild() //home page load
    let btn = document.createElement("button");
    btn.textContent = "Click me!";
    body.appendChild(btn);
    btn.addEventListener("click", fetchWeather);
});
// let test = document.createElement("p");
// test.textContent = "Hello World!";
// body.appendChild(test);


