const produto = {
    nome: 'Caneta',
    preco: 1.90,
    desconto: 0.05
}

function clonar(objeto) {
    //vai criar um novo objeto com as propriedades do objeto passado como parametro e vai retornar ele
    return { ...objeto };
}

const novoProduto = clonar(produto);
novoProduto.nome = "Tesoura";

console.log(produto, novoProduto);