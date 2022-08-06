/*Написать, функцию, которая принимает в качестве аргумента объект
 и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

function fObj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
        console.log (obj);
        }  
    }

}
const obj = {a:1, b:"word"};
fObj(obj);