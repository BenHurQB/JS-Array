const notas = [7, 7, 8, 9];


const novasNotas = [...notas]; // esta dizendo para js que novasNotas recebera os valores de notas, mas não são iguais.
const novasNotas1 = [10, ...notas]; // acrescenta no inicio e não precisa do 
const novasNotas2 = [...notas, 10]; // acrescenta no final e não  precisa do push
novasNotas.push(10);
novasNotas.push(5);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As novas notas são ${novasNotas1}`);
console.log(`As novas notas são ${novasNotas2}`);
console.log(`As notas originais são ${notas}`);
