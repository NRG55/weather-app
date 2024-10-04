import './style.css';
import { getWeather } from './modules/getWeather';

const form = document.querySelector('.search-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('.search-input');
    const errorMessage = document.querySelector('.error-message');
   
    console.log(userInput.innerHTML)
    if (!isValid(userInput.innerHTML)) {
        console.log('click')
        errorMessage.innerText = "Please enter a location";
        errorMessage.classList.add('active');
        setTimeout(() => errorMessage.classList.remove('active'), 3000);

        return;
    };

    getWeather(userInput.value);
    userInput.value = '';
});

const unitCheckbox = document.querySelector('.units-checkbox');

unitCheckbox.addEventListener('click', () => {
    const currentLocation = document.querySelector('.location-name');
    getWeather(currentLocation.innerText);
});

const isValid = (userInput) => {    
    if (userInput === "") {
        return false;
    }
    return true;   
}

getWeather("Dublin");





