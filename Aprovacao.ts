import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a nota do estudante: ", (inputNota) =>{
    const nota = parseFloat(inputNota);

    if(isNaN(nota) || nota < 0 || nota > 100){
        console.log("Digite um valor válido");
    } else {
        if(nota >= 60){
            console.log("Aluno aprovado!", nota);
        } else {
            console.log("Aluno reprovado!", nota);
        }
    }
    rl.close();
});