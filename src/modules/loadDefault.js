import { fetchWeather } from "./weatherAPI.js";

export function loadDefault() {
    let city = "Portland";
    let state = "OR";
    fetchWeather(city, state);
}