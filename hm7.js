// Задание 1

let strDown = 'js';
strDown = strDown.toUpperCase();
console.log(strDown);

// Задание 2

function arrStr(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr)); 
}
//Пример
const stringsArray = ["Банан", "блик", "яблоко", "БУБА"];
const searchString = "б";
console.log(arrStr(stringsArray, searchString));

// Задание 3

let mathNumber = 32.58884;

console.log(Math.floor(mathNumber));
console.log(Math.ceil(mathNumber));
console.log(Math.round(mathNumber));

// Задание 4

let minNum = Math.min(52, 53, 49, 77, 21, 32);
console.log(minNum);
let maxNum = Math.max(52, 53, 49, 77, 21, 32);
console.log(maxNum);

// Задание 5

function randomNum() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

// Задание 6

function randomArray(number) {
    const arr = [];    
    for (let i = 0; i < Math.floor(number / 2);) {
        let arrNum = Math.floor(Math.random() * (number + 1));        
        if (arrNum <= number) {
            arr[i] = arrNum;
            i++;     
        } else {
            continue;
        }            
    }    
    return arr;    
}

// Задание 7

function range(a, b) {
    while (true) {
       let c = Math.floor(Math.random() * 100 + 1);
       if (c >= a && c <= b || c <= a && c >= b) {
        return c;
       } else {
        continue;
       } 
    }
}

// Задание 8

console.log(new Date());

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 72);
console.log(currentDate);

// Задание 10

function nowDate() {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг",
"пятница", "суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let myDay = new Date();
    let fullDate = "Дата: " + myDay.getDate() + " " + months[myDay.getMonth()] + " " + myDay.getFullYear() + " – это " + days[myDay.getDay()];
    let fullTime = "Время: " + myDay.getHours() + ":" + myDay.getMinutes() + ":" + myDay.getSeconds();

    console.log(fullDate); 
    console.log(fullTime);    
}    