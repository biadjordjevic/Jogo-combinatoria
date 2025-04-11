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
        numeros.push(Math.floor(Math.random() * 10))
    }
    return numeros
}

const teclado = document.getElementById("teclado");
for (let i = 0; i <= 9; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = adicionarNumero(i);
    teclado.appendChild(btn);
}

function adicionarNumero(){
    if (tentativa.lenght < sequencia.length){
        tentativa.push(numero)
        atualizarTentaiva();
    }
}

function atualizarTentaiva(){
    document.getElementById("palpite".textContent = "Sua tentativa: " + tentativa.join (""));
}

function limparTentativa(){
    tentativa = [];
    atualizarTentaiva();
    document.getElementById("mensagem").textContent = "";
}

function enviarTentativa(){
    if (tentativa.length !== sequencia.length){
        document.getElementById("mensagem").textContent = "Sua tentativa não está completa!";
        return;
 }
    const acertou = tentativa.every((num, i) => num === sequencia[i]);
    
    if(acertou){
        document.getElementById("mensagem").textContent = "Você acertou a sequência!";
    }
    else{
        document.getElementById("mensagem").textContent = "Tente novamente";
    }
}

function mostrarDica(){
    const soma = sequencia.reduce((acc, val) => acc = val, 0);
    document.getElementById("mensagem").textContent = "Dica: a soma dos números da sequência é: " + soma;
    dica1 = true
    document.getElementById(dica2).disaled = false;
}

function mostrarDica2(){
    const primeironumero = sequencia[0];
    document.getElementById("mensagem").textContent = "Dica 2: o primeiro número da sequência é " + primeironumero
    dica2 = true;
}

function revelarResposta(){
    if (dica1 && dica2){
        document.getElementById("mensagem").textContent = "A sequêcia era: " + sequencia.join(""); 
    }
    else {
        document.getElementById("mensagem").textContent = "Você precisa usar a duas dicas para saber a resposta"
    }
}

