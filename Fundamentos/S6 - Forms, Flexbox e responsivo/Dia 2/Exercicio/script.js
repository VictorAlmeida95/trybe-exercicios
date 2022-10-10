function stopSubmit (event){
    event.preventDefault();
}
let bst = document.getElementById('sb')
bst.addEventListener('click', stopSubmit)