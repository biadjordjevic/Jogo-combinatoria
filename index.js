const tamanhoMax = 3;
const tamanhoMin = 3;

let sequencia = gerarSequencia();
let tentativa = [];
let dica1 = false;
let dica2 = false;

function gerarSequencia(){
    const tamanho = Math.floor(Math.random() * (tamanhoMax - tamanhoMin + 1)) + tamanhoMin;
    const numeros = [];
    for(let i = 0; i < tamanho; i++){
        numeros.push(Math.floor(Math.random() * 10));
    }
    return numeros;
}

// Monta o teclado
const teclado = document.getElementById("teclado");
for (let i = 0; i <= 9; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => adicionarNumero(i);
    teclado.appendChild(btn);
}

function adicionarNumero(numero){
    if (tentativa.length < sequencia.length){
        tentativa.push(numero);
        atualizarTentativa();
    }
}

function atualizarTentativa(){
    document.getElementById("palpite").textContent = "Sua tentativa: " + tentativa.join("");
}

function limparTentativa(){
    tentativa = [];
    atualizarTentativa();
    document.getElementById("mensagem").textContent = "";
}

function enviarTentativa(){
    if (tentativa.length !== sequencia.length){
        document.getElementById("mensagem").textContent = "Sua tentativa não está completa!";
        return;
    }

    const acertou = tentativa.every((num, i) => num === sequencia[i]);

    if(acertou){
        let pontosGanhos = 0;

        if (dica1 && dica2) {
            pontosGanhos = 5;
        } else if (dica1 || dica2) {
            pontosGanhos = 15;
        } else {
            pontosGanhos = 20;
        }

        pontuacao += pontosGanhos;

        document.getElementById("mensagem").textContent =
        `Você acertou a sequência! (+${pontosGanhos} pontos)`;

        document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;

        if (pontuacao >= 30) {
        alert("🎉 Parabéns! Você venceu o jogo!");
        pontuacao = 0;
        document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
        }

        sequencia = gerarSequencia();
        dica1 = false;
        dica2 = false;
        tentativa = [];
        atualizarTentativa();
        document.getElementById("dica2").disabled = true;

    } else {
        document.getElementById("mensagem").textContent = "Tente novamente";
    }
}

function mostrarDica(){
    const soma = sequencia.reduce((acc, val) => acc + val, 0);
    document.getElementById("mensagem").textContent = "Dica: a soma dos números da sequência é: " + soma;
    dica1 = true;
    document.getElementById("dica2").disabled = false;
}

function mostrarDica2(){
    const primeiroNumero = sequencia[0];
    document.getElementById("mensagem").textContent = "Dica 2: o primeiro número da sequência é " + primeiroNumero;
    dica2 = true;
}

function revelarResposta(){
    if (dica1 && dica2){
        document.getElementById("mensagem").textContent = "A sequência era: " + sequencia.join(""); 
    } else {
        document.getElementById("mensagem").textContent = "Você precisa usar as duas dicas para ver a resposta.";
    }
}

let pontuacao = 0;
