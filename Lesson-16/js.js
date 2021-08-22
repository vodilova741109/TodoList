'use strict';

// const obj = {
//     a: 5,
//     b: 10
// };

// console.log(obj);

const map = new Map([
    [2019, 20],
    ['свойство', 12]  

]);

map.set('car', {band: 'mazda', model:3})
    .set(777, 'число')
    .set(null, 0)
    .set(NaN, 'Nan получили')
    .set(undefined, 'неожиданно');

const obj = {
    name: 'Макс',
    age: 30
};
map.set(obj, 'объект');
const func = () => {
    console.log('Hello');
  }
  map.set(func, 'функция');

// показывает весь объект
console.log(map);
// получает значение 
console.log(map.get(func));
// показывает булиновойе значение
console.log(map.has(func));
// можно получить кол-во свойств объекта
console.log(map.size);

// получаем большой массив с множеством вложенных
const arr = Array.from(map);
console.log('arr: ', arr);

// можно ппрогнать через цикл

// map.forEach((value, key) =>{    
//     console.log(`ключ: ${key} значение: ${value}`);
// })

// также прогнать через цикл For  с диструктуризацией
for(let [key, value] of map){
    console.log(`ключ: ${key} значение: ${value}`);
}

const collectMap = new Map([
    
    ['hello', 'world'],
    ['year', 1812]
]);
console.log('collectMap: ', collectMap);
// функция удаления элемента
collectMap.delete('year');
console.log(collectMap);

// удаление всех элементов
collectMap.clear();
console.log(collectMap);


