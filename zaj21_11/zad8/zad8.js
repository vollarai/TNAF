
const list = document.getElementById('list');
const add = document.getElementById('add');
const element = document.getElementById('element');

add.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const text = element.value.trim();

    if (text !== '') {
    
        const newel= document.createElement('li');
        newel.textContent = text;

        list.appendChild(newel);

        element.value = '';
    }
});
