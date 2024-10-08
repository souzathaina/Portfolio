function imc() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);


    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "com peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "com sobrepeso";
    } else {
        classificacao = "com obesidade";
    }

    document.getElementById("resultado").textContent = `Seu IMC é ${imc}. Você está ${classificacao}.`;
}
