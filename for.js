const numeros = [100, 200, 300, 400, 500, 600];

let soma = 0.0;

for (let indice = 0; indice < numeros.length; indice++){
    console.log(`O elemento ${indice + 1} da lista numeros é: ${numeros[indice]}`);

}

for (let indice = 0; indice < numeros.length; indice++){
    soma  +=  numeros[indice];
}
console.log(`A soma é ${soma} e a média é ${soma/numeros.length}`);

// outra maneira mais reduzida onde elemento vai receber o valor de numeros[indice]

soma = 0.0;


for (let elemento of numeros){
    soma += elemento;
}
console.log(`A soma é ${soma} e a média é ${soma/numeros.length}`);

//outra maneira com forEach - funcao callback

numeros.push(700);
soma = 0.0

numeros.forEach(function (elemento, indice) { // funcao anonima onde elemento vai receber o valor de numeros[indice]
    soma += elemento;
    console.log(elemento, indice); // ira ser impresso o elemento e o indice do array numeros
})
console.log(`A soma é ${soma} e a média é ${soma/numeros.length}`);

// mais sobre callback

const nomes = ['Evaldo', 'Mari', 'Camis'];

nomes.forEach(function(elemento){
    console.log(elemento);
})

nomes.forEach((elemento) =>{ // usando  Arrow function
    console.log(elemento);
})

function imprimeNomes(elemento){ // usando uma function externa
    console.log(elemento);
}
nomes.forEach(imprimeNomes);