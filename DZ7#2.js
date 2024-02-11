function pad(str, char, length, isStart) {
    if (typeof str !== 'string' || typeof char !== 'string') {
      throw new Error('Перший та другий аргументи мають бути рядком');
    }
  
    if (typeof length !== 'number' || length < 0 || length % 1 !== 0) {
      throw new Error('Третій аргумент має бути додатнім цілим числом');
    }
  
    const diff = length - str.length;
    if (diff <= 0) {
      return str;
    }
  
    const padChars = char.repeat(diff).slice(0, diff);
    return isStart ? padChars + str : str + padChars;
  }
  
  function padEnd(str, char, length) {
    return pad(str, char, length, false);
  }
  
  function padStart(str, char, length) {
    return pad(str, char, length, true);
  }
  
  // Приклади використання:
  console.log(pad('qwerty', '+', 10, true)); // "++++qwerty"
  console.log(pad('qwerty', '+', 10, false)); // "qwerty++++++"
  console.log(padEnd('qwerty', '+', 10)); // "qwerty++++++"
  console.log(padStart('qwerty', '+', 10)); // "++++qwerty"