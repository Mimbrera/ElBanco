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

const btnSubirExpediente = document.querySelector('#btnSubirExpediente');

function obtenerDatos() {

    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => rellenarSelect(resultado))

}


function rellenarSelect(users) {
    console.log(users);
    const contenido = document.querySelector('#nivel');
    let html = '';
    users.forEach(nivel => {
        const { id } = nivel;
        html += `<select>
        <option>${id}</option>
        </select>`;
        contenido.innerHTML = html;

    });
}

btnSubirExpediente.addEventListener('click', () => {
    LocalStorage();
});

//Funcion LocalStorage
function LocalStorage(){

const experiencia = document.getElementById('experiencia').value;
const tecno = document.getElementById('tecnologias').value;
const nivel = document.getElementById('nivel').value;
const vacante = document.getElementById('vacante').value;
const observacion = document.getElementById('observacion').value;

if(experiencia != "" && tecno != "" && nivel != "" && vacante != "" && observacion != "") {
    // Guarda los datos de los campos en el LocalStorage
        localStorage.Experiencia = experiencia;
        localStorage.Tecnologias = tecno;
        localStorage.Nivel = nivel;
        localStorage.Cumple = vacante;
        localStorage.Observación = observacion;
 }else{
   alert('Los campos no pueden quedarse vacios.');
 }
  
}