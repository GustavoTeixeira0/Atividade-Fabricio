import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um número limite", (inputNumero) => {
    const limite = parseInt(inputNumero);
    let soma = 0;
    let i = 1

    while(i <= limite){
        soma += i;
        console.log("Soma: ", soma);
        i++;
    }

    console.log("A soma dos números de 1 até ", limite, "é", soma);
    console.log('A soma dos números de 1 até ${limite} é ${soma}');
    rl.close();
})