function fatorial() {
    
    const n = parseInt(document.getElementById("n").value, 10);

    
    if (isNaN(n) || n < 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um número inteiro não-negativo.";
        return;
    }

    let f = 1;

    
    for (let c = 1; c <= n; c++) {
        f *= c;
    }

    
    document.getElementById("resultado").textContent = `O fatorial de ${n} é ${f}.`;
}
