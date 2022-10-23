let escolhaQuantidade;

function numeroDeCartas(){
    
    do{
        escolhaQuantidade = prompt('Insira o número de cartas com o qual deseja jogar');
        escolhaQuantidade = Number(escolhaQuantidade);
    } while (escolhaQuantidade < 4 || escolhaQuantidade > 14 || escolhaQuantidade % 2 !== 0);
    
}

numeroDeCartas();



function virarCarta(cartaClicada){
    cartaClicada.classList.add('virada');
}