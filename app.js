let counter = 0;

const counterValue = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.querySelector('#reset');

// To increase the value of counter
incrementButton.addEventListener('click', function() {
	counter++;
	counterValue.innerHTML = counter;
});

// To decrease the value of counter
decrementButton.addEventListener('click', function() {
	counter--;
	counterValue.innerHTML = counter;
});

// To reset the counter value to zero
resetButton.addEventListener('click', reset);

function reset() {
	counter = 0;
	counterValue.innerHTML = counter;
}
