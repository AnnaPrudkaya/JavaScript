const myObject = {
  name: 'Anna',
  age: 31,
  city: 'Dnipro',

  getInfo: function() {
      for (const key in this) {
          if (typeof this[key] !== 'function') {
              console.log(`${key}: ${this[key]}`);
          }
      }
  }
};

myObject.getInfo(); // Правильна інформація про об'єкт

myObject.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта

myObject.getInfo(); // Виводить всі властивості, включаючи щойно додану