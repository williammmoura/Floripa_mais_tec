function calcular(){
    /*Variáveis de entrada*/
    let ent1 = document.getElementById("ent1");
    let n1 = Number(ent1.value);
    let ent2 = document.getElementById("ent2");
    let n2 = Number(ent2.value);
    let operacao = document.getElementById("operador");

    /*Variavel de saída (Resposta)*/
    let resultado = document.getElementById("resultado");

    /*Operação selecionada*/
    let operacaoSelec = operacao.selectedIndex;

    /*Escolha (switch)*/
    switch(operacaoSelec){
        case 0:
            operacaoSelec == 'soma';
            let soma = n1 + n2;
            resultado.innerHTML = `${n1}+${n2}=${soma}`;
        break
        case 1:
            operacaoSelec == 'subtracao';
            let subtracao = n1 - n2;
            resultado.innerHTML = `${n1}-${n2}=${subtracao}`;
        break
        case 2:
            operacaoSelec == 'multi';
            let multi = n1 * n2;
            resultado.innerHTML = `${n1}*${n2}=${multi}`;
        break
        case 3:
            operacaoSelec == 'divisao';
            let divisao = n1 / n2;
            resultado.innerHTML = `${n1}÷${n2}=${divisao}`;
        break
        case 4:
            operacaoSelec == 'potencia';
            let potencia = n1 ** n2;
            resultado.innerHTML = `${n1}^${n2}=${potencia}`
        case 5:
            operacaoSelec == 'modulo';
            let  modulo = n1 % n2;
            resultado.innerHTML = `O resto da divisão entre ${n1} e ${n2} é ${modulo}`;
        break
        default:
            resultado.innerHTML = `[ERRO] Selecione uma opção válida.`;     
    }
}
