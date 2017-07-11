'use strict';

// ДЗ - 4 (не обязательно)
//
// Создать функцию `scanDOM`.
// `scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
// Тэгов div: 10
// Тэгов a: 5
// Тэгов span: 10
// Текстовых узлов: 100
// Элементов с классом c1: 10
// Элементов с классом c2: 20

function scanDOM( node ) {

    // обвязка для функции scanDOM
    let result = [];        //массив с узлами
    let sortResult;         //отсортированный массив с узлами
    let resultObj = {};     //возвращаемый объект со статистикой по всем узлам


    /**
     * рекурсивное сканирование дерева и вынесение "чистых" узлов в массив
     * @param  {DOM-объект} node передаваемый в функцию DOM-объект,
     * внутри которого в массив выписываются все узлы
     * @return нет. Через замыкание меняется массив result
     */
    function scanDOMAndWriteInArr(node) {
        if (node) {
            let child = node.firstChild;
            while (child) {
                if (child.nodeType === Node.ELEMENT_NODE) {
                    result.push( child.tagName );
                    if ( child.classList.length !== 0 ) {
                        for (let i=0; i < child.classList.length; i++ ) {
                            result.push( 'CLASS_IS=' + child.classList[i] );
                        }
                    }
                    scanDOMAndWriteInArr(child);
                } else if ( child.nodeType === Node.TEXT_NODE ) {
                    result.push('TEXT_NODE');
                    scanDOMAndWriteInArr(child);
                } else if ( child.nodeType === Node.COMMENT_NODE ) {
                    result.push('COMMENT_NODE');
                    scanDOMAndWriteInArr(child);
                }
                else {
                    result.push('UNKNOWN_NODE');
                    scanDOMAndWriteInArr(child);
                };
                child = child.nextSibling;
            };
        };
    }; //scanDOMAndWriteInObj

    // Инициализирующий вызов функции сканирования DOM дерева и записи "чистых" узлов в массив
    scanDOMAndWriteInArr(node);

    // обработка массива "чистых" узлов и запись статистики в результирующий объект
    // На всякий случай отсортирую массив, чтобы в будущем можно было применить алгоритмы поиска
    sortResult = result.slice().sort();
    for ( let i = 0; i < sortResult.length; i++  ) {
        let stringForStatCount = sortResult[i];
        if ( resultObj[stringForStatCount] === undefined ) {
            resultObj[stringForStatCount] = true; // запомнить строку в виде свойства объекта
            resultObj[stringForStatCount] = 1;    // Проинициализируем счетчик вхождений этой строки в результирующий объект
        } else {
            resultObj[stringForStatCount] += 1;
        }
    };

    return resultObj;
}; // scanDOM

//сканируем DOM начиная с <HTML>
console.log(
    scanDOM( document.documentElement )
);
