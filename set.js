const nomes = ['ana', 'clara', 'maria', 'maria', 'joao', 'joao', 'joao'];

const meuSet = new Set(nomes);  // os elementos de set não pode se repetir

const nomesAtualizados = [...meuSet]; // transforme novamente em um array
const nomesAtualizados1 = [...new Set(nomes)]; // forma simplificada

console.log(meuSet);
console.log(nomesAtualizados);
console.log(nomesAtualizados1);