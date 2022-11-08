let clickCount = 0;
const textToDisplay = document.getElementById('text');
const buttonTest = document.getElementById('button_test');

buttonTest.addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);