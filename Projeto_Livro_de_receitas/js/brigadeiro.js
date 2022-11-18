let listaDeComentarios = [];

let comentario = {
    nome: 'William',
    nota: 10,
    comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis sunt saepe impedit sint. Itaque rerum quam nam porro et iure perferendis odio veniam officia facilis autem, veritatis, minus aut!',
};

//==================================================================

//Pegando elementos HTML.
function capturarFormulario(){
    const nome_el = document.getElementById('nome');
    const nota_el = document.getElementById('nota');
    const comentario_el = document.getElementById('comentario');

    const resultadoFormulario = {
        nome: nome_el.value,
        nota: nota_el.value,
        comentario: comentario_el.value,
    };

    criarComentarioHTML(resultadoFormulario);
};

function criarComentarioHTML(objeto){
    //Criando elementos.
    let li = document.createElement('li');

    let span_nome = document.createElement('span');
    span_nome.innerText = objeto.nome//Coloca o valor do objeto dentro do "span".
    let span_nota = document.createElement('span');
    span_nota.innerText = objeto.nota;
    
    let paragrafo = document.createElement('p');//Coloca o valor do objeto dentro do paragrafo.
    paragrafo.innerText = objeto.comentario;

    //Adicionando elementos dento do "li".
    li.appendChild(span_nome);
    li.appendChild(span_nota);
    li.appendChild(paragrafo);

    let ul = document.getElementById('comentarios');
    //Adicionando elementos "li´s" dentro do "ul".
    ul.appendChild(li);
}

