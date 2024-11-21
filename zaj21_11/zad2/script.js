const textElement = document.getElementById('text');
const incrementButton = document.getElementById('increment');
const switchButton = document.getElementById('switch');

incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(textElement.textContent, 10);
    textElement.textContent = currentValue + 1;
});

switchButton.addEventListener('click', () => {
    textElement.classList.toggle('red');
});
