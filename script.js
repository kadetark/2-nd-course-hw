function game1() {
    const X = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let userText = prompt('Угадайте число от 1 до 100');
        if (userText === null) break;

        let userNum = Number(userText);

        if (userNum === X) {
            alert('Молодец угадал');
            break;
        } else if (userNum < X && userNum > 0) {
            alert('Загаданное число больше');
        } else if (userNum > X && userNum <= 100) {
            alert('Загаданное число меньше');
        } else {
            alert('Нарушил условия игры');
        }
    }
}

function game2() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = Math.floor(Math.random() * operations.length);

    let c = '';
    let result = '';

    switch (operation) {
        case 0:
            c = operations[0];
            result = a + b;
            break;
        case 1:
            c = operations[1];
            if (a < b) {
                [a, b] = [b, a];
            }
            result = a - b;
            break;
        case 2:
            c = operations[2];
            result = a * b;
            break;
        case 3:
            c = operations[3];
            result = a;
            a *= b;
            break;
    }

    let userResult = prompt(`Введите результат ${a} ${c} ${b}`);
    if (userResult === null);
    else if (Number(userResult) === result) {
        alert('Молодец, верно!');
    } else {
        alert('Не верно');
    }
}

function game3() {
    let userText = prompt('Введите тест');
    let newText = userText.split("").reverse().join("");
    alert(newText);
}

function game4() {
    let user = String(prompt("Введи в поле ваш выбор: камень, ножницы или бумага."));
    user = user.toLowerCase();

    if (user !== "камень" && user !== "ножницы" && user !== "бумага") {
        alert('Неверный ввод');
        return;
    }    

    const options = ["камень", "ножницы", "бумага"];        
    let comp = options[Math.floor(Math.random() * 3)];
    const winner = {
        камень: "ножницы",
        ножницы: "бумага",
        бумага: "камень"
    }

    alert(`Ваш выбор: ${user}, \nКомпьютер выбрал: ${comp}`);     

    if (user === comp) {
        alert('Ничья');
    } else if (winner[user] === comp) {
        alert("Вы победили, поздравляем!");    
    } else {
        alert("Увы, проигрыш. Выиграл компьютер.");
    }
}


function game5() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(`Выберите правильный ответ на вопрос: \n${quiz[i].question} \n${quiz[i].options.join(" ")}`);
        if (userAnswer === null) break;

        if (Number(userAnswer) === quiz[i].correctAnswer) {
            correctAnswers++;
            alert('Верно');
        } else {
            alert('Не верно');
        }
    }

    alert(`Правильных ответов ${correctAnswers} из ${quiz.length}`);
}