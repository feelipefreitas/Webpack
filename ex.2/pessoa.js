export default class Pessoa {
    constructor(nome) {
        this.nome = nome;
     }

     falarNome() {
         console.log(`Nome: ${this.nome}`);
     }
    
}