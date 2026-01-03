const images = ["imagens/img1.png", "imagens/img2.png", "imagens/img3.png"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

function atualizarTempo() {
    const inicio = new Date(2024, 4, 23); // mês começa do 0 (4 = maio)
    const agora = new Date();

    let diff = agora - inicio;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("tempo").innerHTML =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

function atualizarTempoYMD() {
    const inicio = new Date(2024, 4, 23); // 23/05/2024
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    // Ajuste de dias negativos
    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();
        dias += ultimoDiaMesAnterior;
    }

    // Ajuste de meses negativos
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById("tempoYMD").innerHTML =
        `${anos} anos, ${meses} meses e ${dias} dias ❤️`;
}
setInterval(() => {
    atualizarTempo();
    atualizarTempoYMD();
}, 1000);

atualizarTempo();
atualizarTempoYMD();