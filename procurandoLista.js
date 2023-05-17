const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    //const alunos = listaDeAlunosEMedias[0]; // na matriz ele vai receber o vetor alunos
    //const medias = listaDeAlunosEMedias[1]; // na matriz ele vai receber o vetor media

    const [alunos, medias] = listaDeAlunosEMedias;

    if (aluno.includes(aluno)){
        console.log(`${aluno} esta cadastrado!`);
        const indice = alunos.indexOf(aluno);
        console.log(`${medias[indice]} foi sua média`);
    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota('João');
exibeNomeENota('Caio');