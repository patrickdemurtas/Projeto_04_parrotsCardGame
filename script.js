let escolhaQuantidade;

function numeroDeCartas(){
    
    do{
        escolhaQuantidade = prompt('Insira o número de cartas com o qual deseja jogar');
        escolhaQuantidade = Number(escolhaQuantidade);
    } while (escolhaQuantidade < 4 || escolhaQuantidade > 14 || escolhaQuantidade % 2 !== 0);
    
}

numeroDeCartas();


let contador = 0;

function virarCarta(cartaClicada){
    cartaClicada.classList.toggle('virada');
    contador++;

    if(contador == 2){
        setTimeout(desvirar, 2000);
        contador = 0;
    }
}

function desvirar(){
    let cartas = document.querySelectorAll('.virada');
    for(let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada');
    }
}