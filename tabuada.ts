import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número para ver a; tabuada: ", (inputNumero) => {
    const numero = parseInt(inputNumero);

    if (isNaN(numero)){
        console.log("Digite um número válido!")
    } else {
        console.log("Tabuada do " + numero)
        for (let i = 1; i <= 10; i++){
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    }
    rl.close();
})