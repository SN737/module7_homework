/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function objCreator() {
    const obj = Object.create(null);
    return obj;  
}

console.log(objCreator());




