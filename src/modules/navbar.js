import '../styles/nav.css';

export function navbar() {
    // const body = document.querySelector("body");
    let nav = document.createElement("div");
    nav.innerHTML = `
        <div class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <form>
                <input id="search" name="search" type="text" placeholder="City Name">
                <!-- Place search image here -->
                <button>Submit</button>
            </form>
        </div>
    `
    return nav;
}
