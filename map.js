const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((elemento) => { //cada elemento do array notas vai ser acrescentado de 1
                                                    // e salvo em outro array
    return elemento + 1;
});

console.log(notasAtualizadas);



const notasAtualizadas1 = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota +1 ; //condicional ternário 
});

console.log(notasAtualizadas1);

const nomes = ['ana julia', 'Caio vinicius', 'Bia silva'];

const nomesPadronizados1 = nomes.map((nome) => {
    return nome.toUpperCase();
})

const nomesPadronizados2 = nomes.map((nome) => nome.toLocaleLowerCase()); // arrow function


console.log(nomes);
console.log(nomesPadronizados1);
console.log(nomesPadronizados2);
