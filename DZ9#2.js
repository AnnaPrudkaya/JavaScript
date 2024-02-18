// Приклад об'єкту, звернути увагу на вкладеність, мати на увазі що об'єкт може ставати ще глибшим:


const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, obj) {
    if (obj.name === companyName && obj.type === 'subCompany') {
        return obj;
    }
    
    if (obj.clients) {
        for (let client of obj.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }
    
    return null;
}

// Виклик функції з об'єктом company як другим аргументом
const subCompanyInfo = findValueByKey('Клієнт 1.2', company); // Обрати необхідне значення
if (subCompanyInfo) {
    console.log('Інформація про subCompany:', subCompanyInfo);
} else {
    console.log('Компанію не знайдено');
}