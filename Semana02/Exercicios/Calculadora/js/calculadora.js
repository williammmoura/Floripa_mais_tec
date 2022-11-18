//Inserindo os números no visor.
function insert(numParam){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML =numero + numParam;
}

//Reset
function reset(){
    document.getElementById('resultado').innerHTML = '';
}

//Clear
function clean(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

//Igual
function igualdade(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}