function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

// Приклад виклику функції
console.log(pow(2, 3)); // Виведе 8