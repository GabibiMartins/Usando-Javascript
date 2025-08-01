// Função para determinar a saudação de acordo com a hora
function saudacaoHora() {
    const data = new Date();
    const hora = data.getHours();
    let saudacaoTexto = "";

    if (hora >= 5 && hora < 12) {
        saudacaoTexto = "Bom Dia!";
    } else if (hora >= 13 && hora < 19) {
        saudacaoTexto = "Boa Tarde!";
    } else {
        saudacaoTexto = "Boa Noite!";
    }

    // Criando o elemento para a saudação
    const saudacao = document.createElement("div");
    saudacao.innerText = saudacaoTexto;
    saudacao.style.position = "absolute";
    saudacao.style.top = "20%";
    saudacao.style.left = "50%";
    saudacao.style.transform = "translateX(-50%)";
    saudacao.style.fontSize = "3em";
    saudacao.style.fontWeight = "bold";
    saudacao.style.color = "#4b0082";
    document.body.appendChild(saudacao);
}

// Função para criar flores na tela
function criarFlor(x, y) {
    const tiposFlores = ['🌷', '🌹', '🌻', '🌼', '💐'];
    const florTipo = tiposFlores[Math.floor(Math.random() * tiposFlores.length)];
    const flor = document.createElement("div");
    flor.innerText = florTipo;
    flor.style.position = "absolute";
    flor.style.left = `${x - 20}px`;
    flor.style.top = `${y - 20}px`;
    flor.style.fontSize = "40px";
    flor.style.transition = "transform 0.2s ease";
    flor.style.pointerEvents = "none";
    document.body.appendChild(flor);

    // Animação de desaparecer
    setTimeout(() => {
        flor.style.transform = "scale(0)";
        setTimeout(() => flor.remove(), 500); // Remove o elemento após a animação
    }, 1000);
}

// Adiciona o evento de movimento do mouse para criar flores
document.addEventListener('mousemove', (e) => {
    criarFlor(e.clientX, e.clientY);
});

// Função para inicializar a página
function inicializar() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "#c7e0c0ff";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.position = "relative";

    // Chama a função para mostrar a saudação
    saudacaoHora();
}

// Chama a função de inicialização quando a página carregar
window.onload = inicializar;
