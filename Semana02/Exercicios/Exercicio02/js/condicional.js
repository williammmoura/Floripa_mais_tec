let idade = 25;
if(idade < 14){
    console.log(`Você tem ${idade} ano(s). Setor amarelo.`);
}else if(idade >= 14 && idade < 18){
    console.log(`Você tem ${idade} anos. Setor azul.`);
}else if(idade >= 18 && idade < 25){
    console.log(`Você tem ${idade} anos. Setor branco.`);
}else{
    console.log(`Você tem ${idade} anos. Setor verde.`);
}