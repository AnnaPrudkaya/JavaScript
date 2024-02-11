function myIsNaN(value) {
    // Перевірка на те, чи вхідне значення є числом:
    if (typeof value !== 'number') {
      return false;
    }
  
    // Перевірка на спеціальні значення NaN:
    return value !== value;
  }
  
  // Приклади використання:
  console.log(myIsNaN(10)); // false
  console.log(myIsNaN(NaN)); // true
  console.log(myIsNaN('string')); // false