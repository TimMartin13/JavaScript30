const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetching the array from the site
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// Find matches in array using user text
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // Make a regex to match the city or state (g=global i=insensitive(case))
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

// Format a large number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Display the matches found in the array on the screen
function displayMatches() {
    // Find the matches
    const matchArray = findMatches(this.value, cities);
    // Change them into html
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${ this.value }</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${ this.value }</span>`);
        return `
        <li>
            <span class="name">${ cityName }, ${ stateName }</span>
            <span class="population">${ numberWithCommas(place.population) }</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

// Search text box
const searchInput = document.querySelector('.search');
// Suggestions list
const suggestions = document.querySelector('.suggestions');

// Listen for change and keyup on the text box
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);