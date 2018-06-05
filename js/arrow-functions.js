const precos = ['10', '23', '19'];

/* TRADICIONAL */
const precosReais = precos.map(function(preco){
    return 'R$ ' + preco + ',00';
});
console.log(precosReais);

const precosReais2 = precos.map((preco) => {return 'R$ ' + preco + ',00';});
console.log(precosReais2);

const precosReais3 = precos.map(preco => `R$  ${preco},00`);
console.log(precosReais3);

const valorAcimaDe30 = precos
    .filter(preco => preco > 20)
    .map(preco => `R$  ${preco},00`);

console.log(valorAcimaDe30);