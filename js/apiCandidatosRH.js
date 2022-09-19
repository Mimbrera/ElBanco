window.onload = async function () {
    obtenerUsuaruios();
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
}
function obtenerUsuaruios() {
    try {
        const url = fetch('https://jsonplaceholder.typicode.com/users')
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado));
    } catch (error) {
        console.error(error);        
    }
}

function mostrarHTML(usuario) {
    console.log(usuario);
    const content = document.querySelector('#tab_candidatos tbody');
    let html = '';

    usuario.forEach(users => {
        const { name, website, address, company } = users;
        html +=`
            <tr>
                <td>${name}</td>
                <td>${website}</td>
                <td class="tabmobil">${address.street}</td>
                <td class="tabmobil">${address.geo.lng}</td>
                <td class="tabmobil">${company.name}</td>
                <td><button class="bote" type="submit"><img id="imagenBote" src="../img/eliminar.png" /></button></td>
            </tr>
        `;
        content.innerHTML = html;
    });
}