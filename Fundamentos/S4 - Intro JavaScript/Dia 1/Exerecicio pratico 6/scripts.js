let resultSeletivo = 'reprovada' // aprovada, lista, reprovada

switch (resultSeletivo) {
  case 'aprovada':

    console.log('Consulte a classificação do filme');

    break;
    
  case 'lista':

    console.log('Você está na nossa lista de espera')

    break;

  case 'reprovada':
    console.log('Você foi reprovada(o)');
      
    break
  
  default:
console.log('Informação incorreta');

}