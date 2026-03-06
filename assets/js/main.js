/* Carrossel */
const itensCarrossel = document.querySelectorAll(".carrosselImagens");
const gap    = 50;    // Mesmo valor que no CSS
const speed  = 0.8;   // Velocidade que os itens se movem
let posicoes = [];    // Armazena a posição horizontal de cada elemento

itensCarrossel.forEach((el, i) => {
    posicoes[i] = el.offsetLeft;   // Posição inicial do elemento dentro do container
});

function animar(){

    // Percorre novamente cada elemento para atualizar sua posição
    itensCarrossel.forEach((el, i) => {

        // Move o elemento para a esquerda
        posicoes[i] -= speed;

        const largura = el.offsetWidth;  // Pega a largura do elemento

        // Verifica se o elemento saiu completamente da tela pela esquerda
        if(posicoes[i] < -largura){
            let maiorPos = Math.max(...posicoes);  // Descobre qual é a maior posição entre todos os elementos, ou seja, o elemento mais à direita

            // Reposiciona o elemento depois do último item
            posicoes[i] = maiorPos + largura + gap;
        }

        el.style.transform = `translateX(${posicoes[i] - el.offsetLeft}px)`;
    });

requestAnimationFrame(animar);
}

animar();