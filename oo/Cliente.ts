class Cliente {
    
    nome:String;
    idade:Number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome} e minha idade é ${this.idade}`;
    }

}

let joao:Cliente = new Cliente('João', 25);
console.log(joao);
console.log(joao.apresentar());

