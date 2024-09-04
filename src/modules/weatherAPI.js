export async function fetchWeather(city, state) {
    let weatherData = "";
    const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}, ${state}?unitGroup=metric&key=CRD82PN2C65PEXJPK8FKPAT49&contentType=json`;
    try {
        console.log('Fetching weather data...');
        const response = await fetch(request);
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        weatherData = await response.json();
        console.log("Weather data fetched:", weatherData);
        populateInfo(weatherData);
    } catch (error) {
        console.log("There has been a problem with your fetch operation:", error);
    }
}

function populateInfo(data) {
    const p = document.querySelector(".p-info");
    p.textContent = `Location: ${data.resolvedAddress}`;
    console.log(`Location: ${data.resolvedAddress}`);
}
