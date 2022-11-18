function escolher(){
    let res = document.getElementById('res');
    let periodoSlct = document.getElementById('respSelec');

    let periodo = periodoSlct.selectedIndex;

    switch(periodo){
        case 0:
            periodo == '--Selecione--'
            res.innerHTML='';
        break
        case 1:
            periodo == 1;
            res.innerHTML='Bom dia!';
        break;
        case 2:
            periodo == 2;
            res.innerHTML='Boa tarde!';
        break;
        case 3:
            periodo == 3;
            res.innerHTML='Boa noite!';
        break;
        default:
            res.innerHTML='Não entendi. Escolha uma das opções: manhã, tarde ou noite.';
    }
}