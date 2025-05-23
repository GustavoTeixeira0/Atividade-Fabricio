import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularAreaCirculo(raio: number): number {
    return Math.PI * Math.pow(raio, 2);

}

rl.question("Digite o valor do raio: ", (inputRaio) => {
    const raio = parseFloat(inputRaio);

    if(isNaN(raio) || raio < 0){
        console.log("Digite um valor válido para calcular o raio");
    } else {
        const area = calcularAreaCirculo(raio);
        console.log("A área é de:", area.toFixed(2));
    }
    rl.close();
})