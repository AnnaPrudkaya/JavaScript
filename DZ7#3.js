function checkProbabilityTheory(count) {
    if (typeof count !== 'number' || count <= 0 || count % 1 !== 0) {
      console.error('Параметр count має бути додатнім цілим числом');
      return;
    }
  
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // генеруємо випадкове число від 100 до 1000 включно
  
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    
    const percentageEven = (evenCount / count) * 100;
    const percentageOdd = (oddCount / count) * 100;
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}%:${percentageOdd.toFixed(2)}%`);
  }
  
  // Приклад використання:
  checkProbabilityTheory(1000);