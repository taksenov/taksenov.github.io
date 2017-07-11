Взять калькулятор, который был сделан в контексте ДЗ от 8 ноября.
(url: https://github.com/taksenov/ls-js-hm-2/tree/master/hm2_3 )

Если домашнее задание не сделано, то сейчас необходимо сделать.
Необходимо модифицировать калькулятор следующим образом:
Превратить калькулятор в Класс (конструктор + прототип)
Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
SqrCalc должен расширять все методы оригинального калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов. Например:

let myCalculator = new SqlCalc(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000

Обратите внимание, что не должно быть дублирования кода из методов оригинального калькулятора. Необходимо применить наследование.
Задачу необходимо выполнить в двух вариантах: ES5 и ES6