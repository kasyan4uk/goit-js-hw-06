const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');

let currentValue = 0;

const increment = () => {
currentValue += 1;
counterValue.textContent = currentValue;
};

const decrement = () => {
currentValue -= 1;
counterValue.textContent = currentValue;
};

counter.querySelector('[data-action="increment"]').addEventListener('click', increment);
counter.querySelector('[data-action="decrement"]').addEventListener('click', decrement);