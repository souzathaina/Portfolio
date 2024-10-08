function calcularMedia() {

    const N1 = parseFloat(document.getElementById('numero1').value);
    const N2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(N1) || isNaN(N2)) {
        document.getElementById('resultado').textContent = "Por favor, insira números válidos.";
        return;
    }

    const media = (N1 + N2) / 2;

    document.getElementById('resultado').textContent = `A média entre ${N1} e ${N2} é ${media.toFixed(2)}.`;
}
