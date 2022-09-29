let pai = document.getElementById('pai');
let todos = pai.childNodes;
 for (let index = todos.length - 1; index >= 0; index -= 1) {
      let filho = todos[index];
      if (filho.id !== 'elementoOndeVoceEsta') {
        filho.remove();
      }
    }

let segundoNeto = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoNeto.remove()