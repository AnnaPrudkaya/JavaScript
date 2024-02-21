var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

let reg = /^[a-z0-9]+[.]?[a-z0-9]*@(gmail.com|yahoo.com)$/i; // Додано флаг i для регістронезалежного пошуку

function getArrayWithCorrectEmails(arr, regex) {
    return arr.map(item => item.email).filter(email => regex.test(email)); // Використано метод map для отримання масиву email, а потім метод filter для відбору валідних адрес
}

let newArr = getArrayWithCorrectEmails(arr, reg);
console.log(newArr);



