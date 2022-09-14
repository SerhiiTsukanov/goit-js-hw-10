

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
<img src="${flags.svg}" class="country-info__flag" width="220px" height="140px">
<ul>
  <li>
    <h3>Capital:&nbsp;</h3>
    <p>${capital}</p>
  </li>
  <li>
    <h3>Population:&nbsp;</h3>
    <p>${population}</p>
  </li>
  <li>
    <h3>Languages:&nbsp;</h3>
    <p>${Object.values(languages)}</p>
  </li>
</ul>
</div>
`;
}

export function createMarkupList({name, flags,}) {
return `
<li class="country__item">
  <img src="${flags.svg}" alt="flag" width="30" height="20">
  <p><b>${name.common}</b></p>
</li>
`;
}