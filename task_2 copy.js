// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
//определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

//let x = prompt("Введите число от 0 до 1000");
let x = 97;
let answer = '';
let result = 'error';

function digitAnaliser () {
    if (x == 0 || x == 1) {
        //alert(`Число ${x} простым не является`);
        result =`Число ${x} простым не является`;
        return result;
    }
    for(let i = 2; i< x; i++){ 
        if (x % i == 0) {
            answer = "не является простым";
            break;
        } else {
            answer = "является простым";
        }
    } 
        result = `Число ${x} ${answer}`;
        return result;
  
}
let getAnalaze = digitAnaliser ();
console.log(getAnalaze);