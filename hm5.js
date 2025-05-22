// Задание 1

function max(a, b) {
    if (a > b || a === b) {
        return a;
    } else {
        return b;
    }    
}

// Задание 2

function even(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Задание 3

function square(x) {    
    console.log(x * x);   
}

function square2(y){
    z = y * y;
    return z;
}

// Задание 4

function howOld() {
    let userOld = Number(prompt('Сколько вам лет?'));
    if (userOld > 0 && userOld < 13) {
        alert('Привет, друг!');
    } else if (userOld >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

// Задание 5

function myNan(a, b) {
   if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
   } else { 
    return a * b;
   }
}

// Задание 6

function cube() {
    n = Number(prompt('Введите число'));
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${n} в кубе равняется ${n ** 3}`;
    }
}

// Задание 7

function getArea(radius) {
    return Math.PI * this.radius * this.radius;
}
function getPerimeter(radius) {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 20,
    area: getArea,
    perimeter: getPerimeter
}

const circle2 = {
    radius: 40,
    area: getArea,
    perimeter: getPerimeter
}




