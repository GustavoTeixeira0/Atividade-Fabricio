import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opcoes = ["pedra", "papel", "tesoura"];

function obterVencedor(jogador: string, computador: string): string {
    if (jogador === computador) return "Empate!";

    if (
        (jogador === "pedra" && computador === "tesoura")||
        (jogador === "papel" && computador === "pedra")||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "Você vence!";
    }
    return "Computador venceu!";
}

rl.question("Escolha (Pedra/Papel/Tesoura): ", (input) => {
    const opcoesJogador = input.toLocaleLowerCase();
    if (!opcoes.includes(opcoesJogador)) {
        console.log("Opção inválida!");
        rl.close();
        return;
    }
    const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
    console.log(`Conputador escolheu: ${computador}`);
    console.log(obterVencedor(opcoesJogador, computador));
    rl.close();
})