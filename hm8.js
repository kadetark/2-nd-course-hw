// Задание 1

const people1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people1.sort((a, b) => a.age - b.age));

// Задание 2

function isPositive(number) {
    if (number > 0) {
        return true;
    }
    else {
        return false;
    }
}
function isMale(man) {
if (man.gender === 'male') {
    return true;
}
}
function filter(arr, rule) {
const result = [];
for (let i = 0; i < arr.length; i++) {
    if (rule(arr[i])) {
        result.push(arr[i]);
    }
}
return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

// Задание 3

function timer() {
    console.log(new Date());
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }, 30000);
}

// Задание 4

function delayForSecond1(callback) {
    setTimeout(() => {
       callback(); 
    }, 1000);
   
}

// delayForSecond1(function () {
//    console.log('Привет, Глеб!');
// })

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));

