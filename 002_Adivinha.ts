import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const adivinhar = () => {
    rl.question("Digite um número entre 1 e 100: ", (input) => {
        const palpite = parseInt(input);
        tentativas++;

        if (palpite === numeroSecreto){
            console.log(`Parabéns você acertou com ${tentativas} tentativas.`);
            rl.close();
        } else if (palpite < numeroSecreto){
            console.log("🟦 Muito baixo, tente novamente!");
            adivinhar(); //chama a função recursivamente até acertar
        } else {
            console.log("🟥 Muito alto, tente novamente!");
            adivinhar(); //chama a função recursivamente até acertar
        }
    });
}
adivinhar();