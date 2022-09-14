window.onload = async function () {
    var strUser = localStorage.getItem('usuario');
    var strPass = localStorage.getItem('contraseña');

    if (strUser == null || strUser.length == 0 || strPass == null || strPass.length == 0) {
        window.location.href = '../Login.html';
    }

    var user = JSON.parse(strUser);
    var name = user[0].name;

    document.getElementById('txtNombre').insertAdjacentText('beforeBegin', name);

    let promise = await fetch(PLACEHOLDER + user[0].id)
                        .then(response => {
                            if (!response.ok) {
                                alert(response.statusText);
                                throw Error(response.statusText);
                            }
                            return response.json();
                        }).then(json => {
                            console.log(json);
                            localStorage.setItem('img', JSON.stringify(json));
                        }).catch(error => alert('¡Error!\n', error));

    var jsonImg = localStorage.getItem('img');//JSON.parse(localStorage.getItem('img'));
    var img = JSON.parse(jsonImg);
    $("#imgUsuario").attr("src", img[0].url);
    obtenerDatos();
}

const btnGuardar = document.querySelector('#btnGuardar');

function obtenerDatos() {

    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => rellenarSelectRH(resultado))

}


function rellenarSelectRH(users) {
    console.log(users);

    const contenido = document.querySelector('#entrevistadores');

    let html = '';

    users.forEach(entrevistador => {

        const { name } = entrevistador;
    
        html += `<select>
        <option>${name}</option>
        </select>`;

        contenido.innerHTML = html;

    });
}

btnGuardar.addEventListener('click', () => {
    obtenerLocalStorage();
});

//Funcion LocalStorage
function obtenerLocalStorage(){

const name = document.getElementById('nombre').value;
const position = document.getElementById('posicion').value;
const entr = document.getElementById('entrevistadores').value;
const date = document.getElementById('fecha').value;
const curriculum = document.getElementById('cv').value;

if( name != "" && position != "" && entr != "" && date != "" && curriculum != "") {
    // Guarda los datos de los campos en el LocalStorage
        localStorage.Nombre = name;
        localStorage.Posicion = position;
        localStorage.Entrevistador = entr;
        localStorage.Fecha = date;
        localStorage.CV = curriculum;
 }else{
   alert('Los campos no pueden quedarse vacios.');
 }
  
}