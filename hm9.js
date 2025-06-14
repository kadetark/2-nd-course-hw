// Задание 1

const title = document.querySelector('.title');
const button = document.querySelector('.btn');

button.addEventListener('click', function() {
    if (title.style.display === 'none') {
        title.style.display = 'block';
    } else {
        title.style.display = 'none';
    }
});

// Задание 2

const text = document.querySelector('.text');
const btnColor = document.querySelector('.btn-color');

btnColor.addEventListener('click', function() {
    text.style.color = 'blue';
});

// Задание 3

const titleHi = document.querySelector('.title-hi');
const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', function() {
    titleHi.textContent = 'Привет, Мир!';
});

// Задание 4

const description = document.querySelectorAll('.description');

description.forEach(description => {
    description.textContent = 'Измененный текст';
});

// Задание 5

const description2 = document.querySelectorAll('.description2');

description2.forEach(description2 => {
    description2.textContent = 'Новый текст';
});

// Задание 6

const btnCreateEl = document.querySelector('.btn-create');

btnCreateEl.addEventListener('click', function() {
        const newP = document.createElement('p');
        newP.textContent = 'Новый абзац';
        document.body.appendChild(newP);
});

// Задание 7

const btnRemove = document.querySelector('.btn-remove');
const description3 = document.querySelector('.description3');

btnRemove.addEventListener('click', function() {
    description3.remove();
});