function game1() {
    const X = Math.floor(Math.random() * 100) + 1;

    while (true) {        
        let userNumber = Number(prompt('Угадайте число от 1 до 100'));

        if (userNumber === X) {
            alert('Молодец угадал');
            break;
        } else if (userNumber < X && userNumber > 0){
            alert('Загаданное число больше');
        } else if (userNumber > X && userNumber <= 100){
            alert('Загаданное число меньше');
        } else {
            alert('Нарушил условия игры');
        }
    }
}