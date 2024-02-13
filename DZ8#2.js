var services = {
    "стрижка": 60,            // вартість в гривнях
    "гоління": 80,           // вартість в гривнях 
    "Миття голови": 100,    // вартість в гривнях 
    price: function() {
        var totalPrice = 0;
        for (var service in this) {
            if (typeof this[service] === 'number') {
                totalPrice += this[service];
            }
        }
        return totalPrice;
    },
    minPrice: function() {
        var minPrice = Infinity;
        for (var service in this) {
            if (typeof this[service] === 'number' && this[service] < minPrice) {
                minPrice = this[service];
            }
        }
        return minPrice;
    },
    maxPrice: function() {
        var maxPrice = -Infinity;
        for (var service in this) {
            if (typeof this[service] === 'number' && this[service] > maxPrice) {
                maxPrice = this[service];
            }
        }
        return maxPrice;
    }
};

// Додавання нової послуги
services['Розбити скло'] = 200;

console.log("Загальна вартість послуг, грн.:", services.price());
console.log("Мінімальна вартість послуг, грн.:", services.minPrice());
console.log("Максимальна вартість послуг, грн.:", services.maxPrice());