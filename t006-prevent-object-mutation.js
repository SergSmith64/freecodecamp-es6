console.log("Start");

// ES6: Prevent Object Mutation
// предотвратить мутацию объекта

// Чтобы гарантировать, что ваши данные не изменяются, JavaScript предоставляет 
// функцию Object.freezeпредотвращения мутации данных.
// Как только объект заморожен, вы больше не можете добавлять, обновлять или удалять 
// свойства из него. Любая попытка изменить объект будет отклонена без ошибки.

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    console.log("__MATH_CONSTANTS.PI__=", MATH_CONSTANTS.PI);
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log("__PI__", PI);

console.log("End");
