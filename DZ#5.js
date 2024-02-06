function convertUnits(unit, quantity) {
    let result;

    switch (unit.toLowerCase()) {
        case 'кілометри':
            result = `${quantity} км. це ${quantity * 1000} м.`;
            break;
        case 'години':
            result = `${quantity} год. це ${quantity * 60} хв.`;
            break;
        case 'кілограми':
            result = `${quantity} кг. це ${quantity * 1000} гр.`;
            break;
        default:
            result = 'Невірна одиниця виміру!';
            break;
    }

    return result;
}

// Приклад використання:
console.log(convertUnits('кілометри', 10));
console.log(convertUnits('години', 1));
console.log(convertUnits('кілограми', 1));
console.log(convertUnits('секунда', 5));  // Невірна одиниця виміру.
