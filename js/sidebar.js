const PLACEHOLDER = 'https://jsonplaceholder.typicode.com/photos?id=';

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
}

function SubmenuAdmin() {
    $(".admin").toggle();
}

function SubmenuRH() {
    $(".RH").toggle();
}

function Logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('contraseña');
    localStorage.removeItem('img');
    window.location.href = '../Login.html';
}

