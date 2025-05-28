// Задание 1

const nums = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] == 10) break;        
}

// Задание 2

const nums2 = [1, 5, 4, 10, 0, 3];

    // 1 Вариант
    nums2.forEach((el, index) => {
        if (el == 4) console.log(`Индекс значения "${el}": ${index}`); 
    });

    //2 Вариант
    console.log(`Индекс значения "4": ${nums2.indexOf(4)}`);    

// Задание 3

const nums3 = [1, 3, 5, 10, 20];

console.log(nums3.join(" "));

// Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}
console.log(arr);

// Задание 5

const nums5 = [1, 1, 1];

nums5.push(2, 2, 2);
console.log(nums5);

// Задание 6

const nums6 = [9, 8, 7, 'a', 6, 5];

nums6.sort((a, b) => a - b);
console.log(nums6);
let var1 = nums6;
let var2 = nums6;

    // 1 вариант
    var1.pop();
    console.log(var1);

    // 2 вариант
    var2.filter(item => item !== 'a');
    console.log(var2);

// Задание 7

const nums7 = [9, 8, 7, 6, 5];

let userNum7 = Number(prompt('Угадай число в массиве'));

if (nums7.includes(userNum7) === true) {
    alert('Угадал');
} else {
    alert('Не угадал');    
}

// Задание 8

let str = 'abcdef';

str = str.split('');
str.reverse();
str = str.join('');
console.log(str);

// Задание 9

const nums9 = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log([].concat(...nums9));

// Задание 10

const total = [2, 10, 5, 4, 8, 3]; 

for (let i = 0; i < total.length; i++) {
    if (i === total.length - 1) break;
    let sum = total[i] + total[i + 1];
    console.log(sum);
}

// Задание 11

function arrSq(arrBefore) {        
    const arrAfter = arrBefore.map(arr => arr ** 2);
    console.log(arrAfter);
}

// Задание 12

function strArr(strBefore) {    
    const strAfter = strBefore.map(str => str.length);
    console.log(strAfter);
}

//Задание 13

function negative(array) {    
    const arrayNew = array.filter(arr => arr < 0);
    console.log(arrayNew);
}

//Задание 14

const random = [];
for (let i = 0; i < 10; i++) {
    random.unshift(Math.floor(Math.random() * 10) + 1);       
}
console.log(random); 

const NewRandom = random.filter(rnd => rnd % 2 === 0);
console.log(NewRandom);

// Задание 15

const midRan = [];
for (let i = 0; i < 6; i++) {
    midRan.unshift(Math.floor(Math.random() * 10) + 1);   
}

const midRes = midRan.reduce((a, b) => a + b) / 6;
console.log(midRes);
