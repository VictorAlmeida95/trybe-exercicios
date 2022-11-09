import './style.css';
import Swal from 'sweetalert2';

const randomId = Math.round(Math.random * 750)
const image = document.getElementById('imagem')
const heroname = document.getElementById('heroname')

const shuffleButton = document.getElementsByClassName('gerar')
shuffleButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(`https://superheroapi.com/api/5859237704126706/${randomId}`).then((Response) => Response.json())
    .then((data)=> {
        image.src = data.image.url
        heroname.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      }));
});

