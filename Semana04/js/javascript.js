let num1 = Number(window.prompt(`Qual é o primeiro valor?`));
let num2 = Number(window.prompt(`Qual é o segundo valor?`));
let operacao = window.prompt(`Qual é a operação? (+ ou -)`)

//Condição para aparecer zero, caso o usuário apertar o botão "cancelar" do prompt.
if(num1 && num2){
    num1 = 0;
    let resultado;
    //Escolha
    switch(operacao){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        default:
            resultado = 'Operação não implementadasdfsd!'
    };
    
    //Confirm
    let exibir_confirm = window.confirm('Deseja exibir o resultado?');
    //Retorna false(apertando cancelar). Retorna true (apertando ok)

    //Condição para que o usuário queira(ou não) exibir o resultado. 
    if(exibir_confirm){
        window.alert(`${num1}${operacao}${num2}=${resultado}`);
    };
}else{
    window.alert(`Digite apenas números.`);
}