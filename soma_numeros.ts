import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Interface para uso do terminal, entrada e saída de informações

// Realiza a soma de 2 números

function somarNumeros(a:number, b:number):number{
    return a + b;
}

rl.question("Digite o primeiro número: ", (input1) => {
    const num1 = parseFloat(input1);

    rl.question("Digite o segundo número: ", (input2) =>{
        const num2 = parseFloat(input2);

        const resultado = somarNumeros(num1, num2);

        console.log(`A soma de ${num1} e ${num2} é ${resultado}`)

        //console.log("A soma de " + num1 + " e " + num2 + " é " + resultado)

        rl.close();
    })
})