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

// Регулярний вираз для перевірки електронної адреси
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[gmail|yahoo]+\.(com)$/;

// Масив для зберігання валідних адрес
var trustedEmails = [];

// Перевірка кожної адреси в масиві arr
arr.forEach(function (item) {
    if (emailRegex.test(item.email)) {
        trustedEmails.push(item.email);
    }
});

console.log(trustedEmails);