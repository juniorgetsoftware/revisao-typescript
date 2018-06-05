var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 " + this.nome + " e minha idade \u00E9 " + this.idade;
    };
    return Cliente;
}());
var joao = new Cliente('João', 25);
console.log(joao);
console.log(joao.apresentar());
