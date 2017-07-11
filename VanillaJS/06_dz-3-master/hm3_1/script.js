// Homework 3

// написать аналоги методов для работы с массивами:
// forEach, filter, map, slice, reduce, splice  пример:
// let array = [1, 2, 3, 4, 5, 6];
// forEach(array, item => console.log(item));
// let greaterThan4 = filter(array, item => item > 4);
// let sqare = map(array, item => item*item);
// Реализация функции splice является задачей со звездочкой.
// Ее выполнение не обязательно, но желательно.

// variables
let array = [1, 2, 3, 4, 5, 6, 'маша, петя', 1, 2, 3, 4, 5, 6];
let array2 = [];
let array3 = '';
let array4 = 228;
// variables end

// forEach
function forEach( arraySource, screenLog ) {

    let arraySourceLength = arraySource.length;

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        for (let i = 0; i < arraySourceLength; i++ ) {
            screenLog(i, arraySource[i], arraySource);
        }
    }

};

forEach(array, (index, value, originalArray) => console.log(index, value));  // return each items of array
try {
    forEach(array2, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    forEach(array3, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    forEach(array4, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
// forEach end

console.log('---= end forEach =---');

// filter
function filter( arraySource, conditionFunc ) {
    let arraySourceLength = arraySource.length;
    let outArray = [];

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        // использую ранее написанный forEach, вместо for...
        forEach(arraySource, (index, value, originalArray) => {
            if ( conditionFunc(arraySource[index]) ) {
                    outArray[outArray.length] = arraySource[index];
            }
        })
    }

    return outArray;
}; //filter

try {
    let greaterThan4 = filter(array, (element) => element > 4);
    console.log(greaterThan4);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_2 = filter(array2, (element) => element > 4);
    console.log(greaterThan4_2);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_3 = filter(array3, (element) => element > 4);
    console.log(greaterThan4_3);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_4 = filter(array4, (element) => element > 4);
    console.log(greaterThan4_4);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
// filter end

console.log('---= end filter =---');

//map
function map( arraySource, conditionFunc ) {
    let arraySourceLength = arraySource.length;
    let outArray = [];

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        for (let i = 0; i < arraySourceLength; i++ ) {
            outArray[i] = conditionFunc(arraySource[i])
        }
        // использую ранее написанный forEach, вместо for...
        forEach(arraySource, (index, value, originalArray) => {
            outArray[index] = conditionFunc(arraySource[index])
        })

    }

    return outArray;
}; //map

try {
    let sqare = map(array, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array2, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array3, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array4, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
//map end

console.log('---= end map =---');

// slice
function slice( arraySource, begin, end ) {
    let arraySourceLength = arraySource.length;
    let outArray = [];
    let beginParam = begin || 0;
    let endParam = end || arraySourceLength;

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        // if end and begin equal
        if ( endParam === beginParam ) {
            return outArray;
        }
        // begin condition
        if ( beginParam < 0 ) {
            if ( Math.abs(beginParam) > arraySourceLength ) {
                return outArray;
            } else {
                beginParam = arraySourceLength + beginParam;
            }
        }
        // end condition
        if ( endParam < 0 ) {
            endParam = arraySourceLength + endParam;
        }
        // out of range condition
        if ( endParam < beginParam || endParam > arraySourceLength || beginParam > arraySourceLength ) {
            return outArray;
        } else {
            for (let i = beginParam; i < endParam; i++ ) {
                outArray[outArray.length] = arraySource[i];
            }
        }
    }

    return outArray;
}; //slice

try {
    let slice1 = slice(array, 2, -100 );
    let sliceEtalon = array.slice( 2, -100 )
    console.log('slice etalon', sliceEtalon);
    console.log('slice array', slice1);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let slice1 = slice(array2, 2, -1 );
    console.log('slice array', slice1);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let slice1 = slice(array3, 2, -1 );
    console.log('slice array', slice1);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let slice1 = slice(array4, 2, -1 );
    console.log('slice array', slice1);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
// slice end

console.log('---= slice end =---');

// reduce
let testReduceArray = [[0, 1], [2, 3], [4, 5]];

function reduce( arraySource, callbackReduce, initialValue ) {
    let arraySourceLength = arraySource.length;
    let outParam;
    let init = initialValue;

    // Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError.
    if ( arraySourceLength === 0 || !Array.isArray(arraySource) && !init && init !== 0 ) {
        throw new Error('NOT_ARRAY');
    }
    //  если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.
    else if ( arraySourceLength === 0 || !Array.isArray(arraySource) && init || init === 0 ) {
        return init;
    }
    else {
        let n = 0;
        let onceElemOfArray = 0;
        let counter = 0;

        //Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан,
        // то будет возвращено одно это значение, без вызова функции callback.
        for (let i=0; i < arraySourceLength; i++ ) {
            if ( arraySource[i] ) {
                ++n;
                onceElemOfArray = arraySource[i];
            }
        }

        if ( n === 1 && !init && init !== 0 ) {
            return onceElemOfArray;
        }

        // Если при вызове reduce()
        // передан аргумент initialValue, то значение previousValue будет
        // равным значению initialValue, а значение currentValue будет равным
        // первому значению в массиве.
        if ( init || init === 0 ) {
            let currentValue = arraySource[0];
            let i = 0;
            ++counter;
            outParam = callbackReduce( init, currentValue, i, arraySource );
        } else
        // Если аргумент initialValue не задан,
        // то значение previousValue будет равным первому значению в массиве,
        // а значение currentValue будет равным второму значению в массиве.
        if ( !init && init !== 0 ) {
            init = arraySource[0];
            let currentValue = arraySource[1];
            let i = 1;
            counter += 2;
            outParam = callbackReduce( init, currentValue, i, arraySource );
        }

        // exec reduceCallback с учетом счетчика counter

        function reduceArrayElement(  ) {
            if ( arraySource[counter] ) {
                outParam = callbackReduce( outParam, arraySource[counter], counter, arraySource );
                ++counter;
                reduceArrayElement(  );
            }
        } //reduceArrayElement
        reduceArrayElement(  );
    }

    return outParam;
}; //reduce

try {
    let reduce1 = reduce(testReduceArray, (previousValue, currentValue, index, array) => { return previousValue.concat(currentValue) });
    let reduceEtalon = testReduceArray.reduce( (previousValue, currentValue, index, array) => { return previousValue.concat(currentValue) });
    console.log('reduce TEST array', reduce1);
    console.log('reduce TEST etalon', reduceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
try {
    let reduce1 = reduce(array, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
    let reduceEtalon = array.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
    console.log('reduce array', reduce1);
    console.log('reduce etalon', reduceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
try {
    let reduce1 = reduce(array2, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
    let reduceEtalon = array2.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
    console.log('reduce array2', reduce1);
    console.log('reduce etalon2', reduceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
try {
    let reduce1 = reduce(array3, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
    let reduceEtalon = array3.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
    console.log('reduce array3', reduce1);
    console.log('reduce etalon3', reduceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
try {
    let reduce1 = reduce(array4, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
    let reduceEtalon = array4.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
    console.log('reduce array4', reduce1);
    console.log('reduce etalon4', reduceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
// reduce end

console.log('---= reduce end =---');
