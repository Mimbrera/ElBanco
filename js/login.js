const PLACEHOLDER = 'https://jsonplaceholder.typicode.com/users/';

window.onload = async function () {
    //Redireccionamos en caso de ya haber accedido con un perfil.

    var str = localStorage.getItem('usuario');
    var pass = localStorage.getItem('contraseña');

    //Comprobamos que exista el usuario y la contraseña.
    if (str != null && str.length != 0 && pass != null && pass.length != 0) {
        var json = JSON.parse(str);
        var email = json[0].email;

        //Verificación de correos y contraseñas validas.
        if (email == 'Sincere@april.biz' && pass == 'Sincere') {
            window.location.href = 'SuperUsuario/VistaGeneral.html';
            return false;
        }else if (email == 'Shanna@melissa.tv' && pass == 'Shanna'){
            window.location.href = "RH/CandidatosRH.html";
            return false;
        }else if (email == "Nathan@yesenia.net" && pass == 'Nathan'){
            window.location.href = "Entrevistador/Candidatos.html";
            return false;
        }

    }else{
        console.log('No hay usuario.');
    }
}

function validateLogin() {
    //Obtención de correo y contraseña.
    var username = document.getElementById("user").value.trim();
    var password = document.getElementById("pass").value;

    //Obtención de usuario por medio de API.
    fetch(PLACEHOLDER + '?email=' + username)
        .then(response => {
            if (!response.ok){
                alert(response.statusText);
                throw Error(response.statusText);
            }
            return response.json();
        }).then(json => {
            console.log(json);
            localStorage.setItem('usuario', JSON.stringify(json));
        }).catch(error => alert('Error: ', error));
    
    //Verificación de existencia de usuario.
    if (localStorage.getItem('usuario') == '') {
        console.error("Correo no encontrado.");
        alert('Correo no encontrado.');
        localStorage.removeItem('usuario');
    } else {
        //Direccionamos a la vista correspondiente.
        if (username == "Sincere@april.biz" && password == "Sincere") {
            alert("Accediendo como Super Usuario...");
            localStorage.setItem('contraseña',password);
        } else if (username == "Shanna@melissa.tv" && password == "Shanna") {
            alert("Accediendo como RH...");
            localStorage.setItem('contraseña',password);
        } else if (username == "Nathan@yesenia.net" && password == "Nathan") {
            alert("Accediendo como Entrevistador...");
            localStorage.setItem('contraseña',password);
        }else{
            alert("Correo y/o contraseña incorrectos.");
        }
    }

}


