import './css/styles.css';
import API from './fetchCountries';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import debounce from 'lodash.debounce';
import {
  createMarkupInfo,
  createMarkupList,
} from './countries-card';

const DEBOUNCE_DELAY = 300;
let LIMIT_COUNTRY = 10;

const searchForm = document.querySelector('#search-box');
const countryListContainer = document.querySelector('.country-list');
const countryInfoContainer = document.querySelector('.country-info');

searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
const searchQuery = searchForm.value.toLowerCase().trim();
    if (searchQuery === '') {
     clearMarkup();
    return;
    }
    API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(massageError)
    // .finally(() => form.reset());
}

function clearMarkup() {
  countryInfoContainer.innerHTML = '';
  countryListContainer.innerHTML = '';
  console.log(countryInfoContainer);
}

function massageError() {
clearMarkup();
  Notiflix.Notify.failure('❌ Oops, there is no country with that name', {
    timeout: 2000,
  });
}

function renderCountryCard(countries) {
    clearMarkup();
    if (countries.length > LIMIT_COUNTRY) {
    Notiflix.Notify.info(
      "Too many matches found. Please enter a more specific name.",
      {timeout: 2000,}
    );
    return;
  } else if (countries.length === 1) {
    refs.countryInfoContainer.innerHTML = createMarkupInfo(countries[0]);
  } else {
    let countryListContainer = '';
    countries.map(country => {
      countryListContainer += createMarkupList(country);
    });
    countryListContainer.insertAdjacentHTML(
      'beforeend',
      countryListContainer
    );
  }
}
