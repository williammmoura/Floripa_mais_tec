//Estrutura de Repetição (loop)

//While
let contador = 0;
while(contador <= 10){//A estrutura irá de 0 até 10.
    console.log('Loop número',contador);
    contador += 1;
}

console.log('=======================================')

let contador2 = 0;
while(contador2 <= 10){//A estrutura irá 1 até 11.
    contador2 += 1;
    console.log('Loop número',contador2);
}

console.log('=======================================')

//Do...While
let contador3 = 0;
do{
    console.log('Loop numero', contador3);
    contador3 += 1;
}while(contador3 < 10);

console.log('=======================================')

/*let contador4 = 0;
do{
    console.log('Loop numero', contador4);
    contador4 += 1;
}while(true);*///Loop INFINITO!!!

console.log('=======================================')

/*let continuar;

do{
    continuar = window.prompt('Deseja continuar? [S/N]');
}while(continuar !== 'n');*/

let controle_a = 0;
let controle_b = 0;

while(controle_a < 5){
    controle_b = 0;
    while(controle_b < 5){
        console.log('Ciclo A'+ controle_a + ' B' + controle_b);
        controle_b++;
    }
    controle_a++;
}

console.log('=======================================')

//Estrutura For
for(let contador5 = 0; contador5 <= 10; contador5++){//Variável de Controle; Verificação de condição; Instrução de incremento
    console.log('Loop número ',contador5);
};

console.log('=======================================')

let periodo_dia ="noite"

if(periodo_dia === "manhã"){
    console.log('Bom dia!');
}else if(periodo_dia === 'tarde'){
    console.log('Boa tarde!');
}else if(periodo_dia === 'noite'){
    console.log('Boa noite!')
}else{
    console.log('Que horas são?')
}

console.log('=======================================')
//Switch/case

let periodo_dia2 = 'tarde';

switch(periodo_dia2){
    case 'manhã':
        console.log('Bom dia!');
        break;
    case 'tarde':
        console.log('Boa tarde!');
        break;
    case 'noite':
        console.log('Boa noite!');
        break;
    default:
        console.log('Que horas são?')
}