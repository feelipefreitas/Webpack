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
    },
    module: {
        //quais arquivos ele vai carregar
        // loaders: [{
        //     test: /.js?$/, //vai carregar todos os arquivos .js
        //     loader: 'babel-loader', //vai carregar o loader do babel que vai estar nas dependencias
        //     exclude: /node_modules/, //não vai carregar os outros arquivos do node_module
        //     //o que eu queroque esse loader interprete, es2015, react, typescript
        //     query: {
        //         presets: ['es2015']
        //     }
        // }]
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', "@babel/preset-react"]
                }
              }
            }
          ]
    }
}