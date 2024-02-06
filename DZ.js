// Введіть число, що означає роки
let userInput = "29"; // Замініть цей рядок конкретним значенням для перевірки

// Перевірте, чи зазначене число (userInput) є вірним, а не від’ємним
if (!isNaN(userInput) && userInput >= 0) {
    // Перетворіть вхідні дані на ціле число
    const years = parseInt(userInput);

    // Визначте правильне слово для використання - «рік», «років/роки»
    let output;
    if (years === 1) {
        output = `${years} рік`;
    } else if (years === 4) {
        output = `${years} роки`;
    } else {
        output = `${years} років`;
    }

    // Вивести результат у консоль
    console.log(`Правильний вік: ${output}`);
} else {
    // Відображати повідомлення про помилку, якщо введене число є недійсним або від'ємним
    console.log("Введіть дійсне невід’ємне число!");
}