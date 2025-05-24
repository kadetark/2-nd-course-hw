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