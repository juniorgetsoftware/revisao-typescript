function imprimirIdade(pessoa: Pessoa /*{ idade: number }*/){
    console.log('idade: '+pessoa.idade);
    
}

/* NÃO COMPILA! DEVETER OS ATRIBUTOS NECESSÁRIOS
let joaoMarcos = { nome : 'João Marcos' };
imprimirIdade(joaoMarcos);
*/

let joaoPedro = { nome : 'João Pedro', idade : 25 };
imprimirIdade(joaoPedro);


/* MELHORANDO */
interface Pessoa {
    idade:number; // obrigatoriedade
    sexo?:string; // não obrigatório { através do uso do '?' }
}

let pedro = { idade:30 }
imprimirIdade(pedro);