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
a = '2';
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