const webpack = require('webpack');

//Vai exportar o objeto que vai conter todas as configurações da aplicação
//Se precisar fazer um tranpile do angular ou react ,coloca aqui
module.exports = {
    //ponto de entrada, que a partir dela toda a aplicação vai ser carregada
    entry: './ex/index.js',
    //fala onde vai ser gerada a saida do arquivo js
    //__dirname é uma variavel de ambiente do node que representa o diretorio atual
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    //configurações relativas ao servidor de desenvolvimento. É disponibilizado pelo webpack
    //ele faz o transpile da aplicação e gera o bundle.js sempre que faz uma alteração na aplicação,
    //ele recarrega o browser quando os arquivos são modificados, ...
    devServer: {
        port: 8080,
        contentBase: './public' //fala onde vai ser a pasta base onde ele vai carregar todos os arquivos. 
        //Vai ser criado o arquivo index.html que vai fazer referencia ao bundle.js para validar 
        //oq o webpack construiu e se esta gerando o efeito esperado
    }
}