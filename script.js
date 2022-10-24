let escolhaQuantidade;


const conteudo = document.querySelector('.conteudo');
let arraygif4 = ['bobrossparrot', 'explodyparrot', 'bobrossparrot', 'explodyparrot'];
let arraygif6 = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot'];
let arraygif8 = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot'];
let arraygif10 = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot'];
let arraygif12 = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot'];
let arraygif14 = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot','bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];

function numeroDeCartas(){
    
    do{
        escolhaQuantidade = prompt('Insira o número de cartas com o qual deseja jogar');
        escolhaQuantidade = Number(escolhaQuantidade);
    } while (escolhaQuantidade < 4 || escolhaQuantidade > 14 || escolhaQuantidade % 2 !== 0);
    
}



let primeiraDoPar = '';
let segundaDoPar = '';


function fimDeJogo(){
    const cartasviradas = document.querySelectorAll('.virar-carta');
    if(cartasviradas.length === escolhaQuantidade){
        alert('Você ganhou em '+contador+' jogadas!');
    }
}

function verificar(){
    const primeiroGif = primeiraDoPar.getAttribute('data-gif');
    const segundoGif = segundaDoPar.getAttribute('data-gif');

    if (primeiroGif === segundoGif){
        primeiraDoPar = '';
        segundaDoPar = '';
        fimDeJogo()

    } else{

        setTimeout(() => {
        primeiraDoPar.classList.remove('virar-carta');
        segundaDoPar.classList.remove('virar-carta');

        primeiraDoPar = '';
        segundaDoPar = '';

    }, 1000);
}
}


let contador = 0;
const virarcarta = ({target}) => {
    
    if (target.parentNode.className.includes('virar-carta')){
    return;
    }
    
    if (primeiraDoPar === ''){
        target.parentNode.classList.add('virar-carta');
        primeiraDoPar = target.parentNode;
        contador++
    } else if (segundaDoPar === ''){
        target.parentNode.classList.add('virar-carta');
        segundaDoPar = target.parentNode;
        contador++

        verificar();
    }
}




function comparador(){
    return Math.random() - 0.5;
}




numeroDeCartas();


function createElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}






function carregaCartas(gif) {
    
    
    const carta = createElement('div', 'carta');
    const front = createElement('div', 'front-face face');
    const back = createElement('div', 'back-face face');
    
    front.style.backgroundImage = `url('./imagens/${gif}.gif')`;

    carta.appendChild(front);
    carta.appendChild(back);

    carta.addEventListener('click', virarcarta);
    carta.setAttribute('data-gif', gif);
    return carta;
    
}

const carregarJogo = () => {
 

    const vetorembaralha14 = arraygif14.sort(comparador);
    const vetorembaralha12 = arraygif12.sort(comparador);
    const vetorembaralha10 = arraygif10.sort(comparador);
    const vetorembaralha8 = arraygif8.sort(comparador);
    const vetorembaralha6 = arraygif6.sort(comparador);
    const vetorembaralha4 = arraygif4.sort(comparador);
 
    
    if(escolhaQuantidade === 14){
        vetorembaralha14.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }

    if(escolhaQuantidade === 12){
        vetorembaralha12.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }

    
    if(escolhaQuantidade === 10){
        vetorembaralha10.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }

    
    if(escolhaQuantidade === 8){
        vetorembaralha8.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }

    
    if(escolhaQuantidade === 6){
        vetorembaralha6.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }

    
    if(escolhaQuantidade === 4){
        vetorembaralha4.forEach((gif) => {
            const carta = carregaCartas(gif);
            conteudo.appendChild(carta);
        });
    }


 
   
}

carregarJogo(); 










