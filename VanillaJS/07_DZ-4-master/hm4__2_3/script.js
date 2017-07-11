'use strict';

// ДЗ - 2
// Создать функцию `deleteTextNodes`
// Эта функция принимает на вход элемент и должна удалить
//  все текстовые узлы внутри указанного элемента.
// Функция может работать не рекурсивно,
// то есть не заходить внутрь дочерних элементов контейнера.
// ДЗ - 3(не обязательно)
// Реализовать функцию, описанную в ДЗ-2, рекурсивно

// родитель в котором удаляются все тектовые узлы
let cangedContainer = document.getElementById('container-changed');
// cangedContainer

/**
 * Удаляет все тектовые узлы внутри указанного контейнера
 * Функция работает рекурсивно
 * @param {DOM element} контейнер в котором будут удалены все текстовые узлы
 */
function deleteTextNodes(element) {
    if ( arguments.length === 0 ) {
        throw new Error('NOT_ELEMENT');
    }
    let i = 0, children = element.childNodes;
    while ( i < children.length ) {
        if( children[i].nodeType === 3 ) {
             element.removeChild(children[i]);
        } else if( children[i].nodeType === 1 ){
             deleteTextNodes(children[i++]);
        } else {
             i++;
        }
    }
}; //deleteTextNodes

//вызов функции удаления текстовых узлов
try {
    deleteTextNodes( cangedContainer );
} catch (e) {
    if (e.message === 'NOT_ELEMENT' ) {
        console.error('Не заданы аргументы для функции deleteTextNodes');
    } else {
        console.error('Ошибка функции deleteTextNodes');
    }
}

try {
    deleteTextNodes(  );
} catch (e) {
    if (e.message === 'NOT_ELEMENT' ) {
        console.error('Не заданы аргументы для функции deleteTextNodes');
    } else {
        console.error('Ошибка функции deleteTextNodes');
    }
}
