import '../styles/nav.css';

export function navbar() {
    // const body = document.querySelector("body");
    let nav = document.querySelector(".navbar");
    let info = document.createElement("ul");
    info.innerHTML = `
                <li><a href="#">Home</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <form>
                <input id="search" name="search" type="text" placeholder="City Name">
                <!-- Place search image here -->
                <button>Submit</button>
            </form>
    `
    nav.appendChild(info);
    return nav;
}
