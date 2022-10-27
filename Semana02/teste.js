//Operadores Lógicos
//Not (!)
console.log(!true); //false
console.log(!false); //true

console.log('=========================');

let string_vazia = "";
console.log(!string_vazia); //true
console.log(!!string_vazia); // com !! volta a ser false. Cada "!" inverte um valor.

console.log('==========================');

//Operadores aritméticos
console.log(2+2);
console.log(10/3);
console.log(3*3);
console.log(8%4);

console.log('=========================');

let num = 1;
num += 4;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
num %= 2;
console.log(num);

console.log('============================');

let num1 = '10';
console.log(parseInt(num1) + 10);

let num2 = '100';
console.log(Number(num2) + 3.5);

console.log('============================');
