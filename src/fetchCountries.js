// которая делает HTTP-запрос на ресурс name и возвращает промис с массивом стран - результатом запроса
// fetchCountries(name);
import countriesCard from './countries-card.js';

fetch('https://restcountries.com/v3.1/name/ukraine').then(response => {
    return response.json();
})
    .then(countries => {
        console.log(countries);
        const markup = countriesCard(countries);
        console.log(markup);
});
