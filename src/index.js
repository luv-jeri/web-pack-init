import getCurrentDate from './date';
import './css/style.css';

const date = getCurrentDate();

const dateEl = document.getElementById('current-date');

console.log(dateEl);

dateEl.innerText = `Curent date: ${date}`;

console.log(date);
