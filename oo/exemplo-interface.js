function imprimirIdade(pessoa /*{ idade: number }*/) {
    console.log('idade: ' + pessoa.idade);
}
/* NÃO COMPILA! DEVETER OS ATRIBUTOS NECESSÁRIOS
let joaoMarcos = { nome : 'João Marcos' };
imprimirIdade(joaoMarcos);
*/
var joaoPedro = { nome: 'João Pedro', idade: 25 };
imprimirIdade(joaoPedro);
var pedro = { idade: 30 };
imprimirIdade(pedro);
