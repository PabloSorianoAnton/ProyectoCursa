function validacionForm(){

    var nombre=document.getElementById('nombre').value;
    var dni=document.getElementById('dni').value;
    var papellido=document.getElementById('papellido').value;
    var sapellido=document.getElementById('sapellido').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
    alert ('Debe poner 8 números y una letra (en mayúscula)');
    return false;
    }

    if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
        alert ('Debe poner 8 números y una letra (en mayúscula)');
        return false;
    }

    if (nombre=='' && papellido=='' && sapellido=='' && email=='') {
        document.getElementById("message").innerHTML = "Inténtalo de nuevo.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
    } else if (nombre=='' && papellido=='' && sapellido=='') {
        document.getElementById("message").innerHTML = "Nombre, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
    } else if (nombre=='' && papellido=='' && email=='') {
        document.getElementById("message").innerHTML = "Nombre, primer apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
    } else if (nombre=='' && sapellido=='' && email=='') {
        document.getElementById("message").innerHTML = "Nombre, segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
    } else if (sapellido=='' && papellido=='' && email=='') {
        document.getElementById("message").innerHTML = "Primer, segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
    } else if (nombre=='' && sapellido=='') {
        document.getElementById("message").innerHTML = "Nombre y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
    } else if (nombre=='' && papellido=='') {
        document.getElementById("message").innerHTML = "Nombre y primer apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
    } else if (nombre=='' && email=='') {
        document.getElementById("message").innerHTML = "Nombre y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
    } else if (sapellido=='' && papellido=='') {
        document.getElementById("message").innerHTML = "Primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
    } else if (sapellido=='' && email=='') {
        document.getElementById("message").innerHTML = "Segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
    } else if (email=='' && papellido=='') {
        document.getElementById("message").innerHTML = "Primer apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
    } else if (nombre=='') {
        document.getElementById("message").innerHTML = "Nombre del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
    } else if (papellido=='') {
        document.getElementById("message").innerHTML = "Primer apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
    } else if (sapellido=='') {
        document.getElementById("message").innerHTML = "Segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
    } else if (email=='') {
        document.getElementById("message").innerHTML = "Email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
    } else {
        return true;
    }
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.backgroundColor = "#FFB0AE";

    
    
    return false;
}