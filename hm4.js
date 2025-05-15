//HW4

//Задание 1
let hi = 0;
while (hi < 2) {
    console.log('Привет');
    hi++;
}

//Задание 2
let l = 1;
while (l <= 5) {
    console.log(l);
    l++;
}

//Задание 3
for (let m = 7; m <= 22; m++){
    console.log(m);
}

//Задание 4
const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400'
}
for (const key in obj) {  
    console.log(`${key}: зарплата ${obj[key]}$`);   
}

//Задание 5
let n = 1000;
 num = 0;
while (n > 50) {    
    n = n / 2; 
    num++;   
}
console.log(n);
console.log(`Количество итераций - ${num}`);

//Задание 6
for (let fr = 5; fr <= 31; fr += 7 ){
    console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`);
}

