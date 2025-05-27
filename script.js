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