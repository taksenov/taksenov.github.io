// Создать функцию `prepend`
// `prepend` имеет два параметра, в которые нужно передать элементы
// Задача функции - вставить второй элемент в начало первого. Например:
// `prepend(container, newElement)` - newElement должен быть добавлен
// в начало элемента container.

// создаем новый элемент который будет вставлен
let newElement = document.createElement('div');
newElement.setAttribute('class', 'inner_block new_background');
newElement.setAttribute('id', 'inner_' + Date.now());
newElement.textContent = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
// newElement

// родитель в который будет вставляться элемент
let parentContainer = document.getElementById('container');
// parentContainer

/**
 * вставляем новый элемент внутрь родителя в самое начало, перед всеми потомками
 * @param  {object} receiver   элемент родитель
 * @param  {object} sourceElem вставляемый элемент
 */
function prepend( receiver, sourceElem ) {
    let referenceElement = receiver.firstChild;

    receiver.insertBefore(sourceElem, referenceElement);
}; // prepend

// вызов prepend
prepend( parentContainer, newElement );
