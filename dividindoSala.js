const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 
'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

alunos.slice(0,10); // o indice 10 não se inclui. Ele não altera o valor do array

const sala1 = alunos.slice(0,alunos.length /2);
const sala2 = alunos.slice(alunos.length /2); // pega do 10 ate o fim do arquivo

console.log(alunos);
console.log(sala1);
console.log(sala2);