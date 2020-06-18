// ES6: Create Strings using Template Literals
// создание строк с использованием литералов шаблона

// Новая особенность ES6 - шаблонный литерал.
// Это специальный тип строки, который облегчает создание сложных строк.

// Шаблонные литералы позволяют создавать многострочные строки 
// и использовать функции интерполяции строк для создания строк.

console.log("Hi");

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
// Шаблонный литерал с многострочной и строковой интерполяцией

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// Чтобы добавить переменные в строки, вы просто помещаете переменную 
// в строку шаблона и переносите ее с помощью ${и }. 
// Точно так же вы можете включить другие выражения в ваш строковый литерал,
// например ${a + b}. 
// Этот новый способ создания строк дает вам больше гибкости 
// для создания надежных строк.


// Используйте синтаксис литерала шаблона с обратными галочками для 
// отображения каждой записи массива resultобъекта failure. 
// Каждая запись должна быть заключена в li-элемент с атрибутом 
// class text-warning и указана в resultDisplayArray.

// Используйте метод итератора (любой вид цикла), чтобы получить 
// желаемый результат (показано ниже).
[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
]

// ___ РЕШЕНИЕ ___

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // Only change code below this line
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

    // const resultDisplayArray = null;

    // console.log(result.failure);

    // console.log([
    //     '<li class="text-warning">no-var</li>',
    //     '<li class="text-warning">var-on-top</li>',
    //     '<li class="text-warning">linebreak</li>'
    //   ])

    // Only change code above this line
  
    return resultDisplayArray;
  }
  
  const resultDisplayArray = makeList(result.failure);
