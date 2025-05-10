// HW2
// //Задание 1
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// //Задание 2
// let iPhone = 2007;
// alert(`Первый iPhone был выпущен в ${iPhone} году`);

// //Задание 3
// let nameJS = "Брендан Эйх";
// alert (`JavaScript создал ${nameJS}`);

// //Задание 4
// let x = 10;
// let y = 2;

// let sum = x + y;
// alert (sum);
// let difference = x - y;
// alert (difference);
// let product = x * y;
// alert (product);
// let quotient = x / y;
// alert (quotient);

// //Задание 5
// let result = 2 ** 5;
// alert(result);

// //Задание 6
// let a6 = 9;
// let b6 = 2;
// alert (a6 % b6);

// //Задание 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// //Задание 8
// let age = prompt('Сколько вам лет?');
// alert (`Вам ${age}`);

// //Задание 9
// let user = {
//     name: 'Иван',
//     age: 30,
//     isAdmin: true
// }

// //Задание 10
// let nameUser = prompt('Как вас зовут?');
// alert (`Привет, ${nameUser}!`);

//HW3

//Задание 1
let password = 'пароль';
let passwordUser = prompt('Введите пароль');
if (password === passwordUser){
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c;
c = 0;
if (c>0 && c<10) {
    console.log(`Верно, если c=${c}`);
} else {
    console.log(`Неверно, если c=${c}`);
}
c = 10;
if (c>0 && c<10) {
    console.log(`Верно, если c=${c}`);
} else {
    console.log(`Неверно, если c=${c}`);
}
c = -3;
if (c>0 && c<10) {
    console.log(`Верно, если c=${c}`);
} else {
    console.log(`Неверно, если c=${c}`);
}
c = 2;
if (c>0 && c<10) {
    console.log(`Верно, если c=${c}`);
} else {
    console.log(`Неверно, если c=${c}`);
}

//Задание 3
let d = 99;
let e = 101;
if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

//Задание 5
let monthNumber = prompt('Введите номер месяца (от 1 до 12)');
switch (monthNumber) {
    case '1':
        console.log('Январь - это зима');
        break;
    case '2':
        console.log('Февраль - это зима');
        break;
    case '3':
        console.log('Март - это весна');
        break;
    case '4':
        console.log('Апрель - это весна');
        break; 
    case '5':
        console.log('Май - это весна');
        break;
    case '6':
        console.log('Июнь - это лето');
        break;   
    case '7':
        console.log('Июль - это лето');
        break;    
    case '8':
        console.log('Август - это лето');
        break; 
    case '9':
        console.log('Сентябрь - это осень');
        break;     
    case '10':
        console.log('Октябрь - это осень');
        break;
    case '11':
        console.log('Ноябрь - это осень');
        break;
    case '12':
        console.log('Декабрь - это зима');
        break;                   
    default:
        console.log('Ошибка');
}
