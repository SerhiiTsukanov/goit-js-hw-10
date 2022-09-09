

export function createMarkupInfo({
    name,
    capital,
    population,
    languages,
    flags,
}) {
    return `
<div>
<h2>${name.common}</h2>
<img src="${flags.svg}" width="200px" height="120px">
<ul>
  <li>
    <h3>Capital:</h3>
    <p>${capital}</p>
  </li>
  <li>
    <h3>Population:</h3>
    <p>${population}</p>
  </li>
  <li>
    <h3>Languages:</h3>
    <p>${Object.values(languages)}</p>
  </li>
</ul>
</div>`
}

export function createMarkupList({
    name,
    flags,
}) {
    return `
<li>
  <img src="${flags.svg}" alt="flag" width="30" height="20">
  <p>${name.common}</p>
</li>`
}