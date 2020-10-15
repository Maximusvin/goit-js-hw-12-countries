const debounce = require('lodash.debounce');

import fetchCountries from './fetchCountries';
import coutrys from '../templates/countrys.hbs'

const countryContainer = document.querySelector('.country__container');
const inputRef = document.querySelector('#input');



inputRef.addEventListener(
    'input', 
    debounce((e) => {    
        fetchCountries(e.target.value).then(updateMarkup)        
}, 1000),
);


function updateMarkup(country){
    countryContainer.innerHTML = coutrys(country);
}
