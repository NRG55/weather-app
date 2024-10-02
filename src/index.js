import './style.css';
import { getWeather } from './modules/getWeather';

const form = document.querySelector('.search-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('.search-input');
    getWeather(userInput.value);
    userInput.value = '';
});





