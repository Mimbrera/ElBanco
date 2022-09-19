window.onload = async function () {
    obtenerDatos();
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

function obtenerDatos() {

    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))

}

function mostrarHTML(users) {
    console.log(users);

    const contenido = document.querySelector('#tab_candidatos tbody');

    let html = '';

    users.forEach(user => {

        const { name, website, username, email } = user;

        html += `
            <tr>
                <td>${name}</td>
                <td>${website}</td>
                <td class="tabmobil">${username}</td>
                <td class="tabmobil">${email}</td>
                <td><button class="button_candidatos" type="submit"><img src="../img/ojo.png" />Ver <span class="tabmobil">perfil</span> </button></td>
            </tr>
        `;

        contenido.innerHTML = html;

    });
}