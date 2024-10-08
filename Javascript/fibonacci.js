function fibo() {
    
    const Valor = parseInt(document.getElementById("Valor").value, 10);
    console.log(`Valor do input: ${Valor}`);  

    
    if (isNaN(Valor) || Valor < 1) {
        document.getElementById("resultado").textContent = "Por favor, insira um número inteiro positivo.";
        return;
    }

    let ant = 0;
    let atual = 1;
    let numAux;
    let resultado = [ant];

   
    if (Valor > 1) {
        resultado.push(atual);
    }

    while (resultado.length < Valor) {
        numAux = ant + atual;
        resultado.push(numAux);
        ant = atual;
        atual = numAux;
        console.log(`Atual: ${atual}, Ant: ${ant}, NumAux: ${numAux}`);  // Para depuração
    }

    document.getElementById("resultado").textContent = `Sequência de Fibonacci até ${Valor} termos: ${resultado.join(', ')}`;
}
