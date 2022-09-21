// Programa pra descobrir como cada peça do xadrez funciona!
// Altere a variavel peca

let peca = 'Rei' // Peão,Bispo,Cavalo,Torre,Rainha e Rei
peca = peca.toLowerCase(peca)

switch (peca) {
  case 'peão':

    console.log('Uma casa para a frente, se estiver em sua casa inicial pode ir duas casas.');

    break;
    
  case 'bispo':

    console.log('Diagonais sem limitação de casas')

    break;

  case 'cavalo':
    console.log('Duas casas para frente na horizontal ou vertical e depois uma a direita ou a esquerda, pulando as peças.');
      
    break;
  
  case 'torre':
    console.log('Vertical e horizontal sem limitação de casas.');
      
    break;
    
  case 'rainha':
    console.log('Qualquer direção,sem limitação de casas.');
          
    break;
  
  case 'rei':
    console.log('Apenas uma casa em qualquer direção.')
    
    break;
  
  default:
    console.log('Erro!')
}