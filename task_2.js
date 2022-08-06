/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const  theCar = {
    make: "Audi",
    model: "A4",
    year: 2011,
    type: "TFSI"
};

function fObj(str, obj) {
    let result = str in obj;
    return console.log(result);    
};

fObj('model', theCar);

