// Перший спосіб: використовуючи цикл for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

// Виклик функції для відображення трикутника
drawTriangle(5, '*');


// Другий спосіб: використовуючи метод repeat
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = symbol.repeat(i);
        console.log(row);
    }
}

// Виклик функції для відображення трикутника
drawTriangle(5, '*');