var email = document.getElementById("txtUseremail");
var password = document.getElementById("txtUserpassword");
var username = document.getElementById("txtUsername");
var mensajeUsuario = document.getElementById("mensajeUsername");
var mensajeEmail = document.getElementById("mensajeEmail");
var mensajePassword = document.getElementById("mensajePassword");

function validarUserName()
{
    var valor = this.username.value;
    var regEx = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    if(valor.search(regEx)==0)
    {
        this.username.style.borderColor= "green";
        this.mensajeUsuario.innerHTML = " ";
        return true;
    }
    else
    {
        this.username.style.borderColor= "red";
        this.mensajeUsuario.style.color = "red";
        this.mensajeUsuario.style.fontWeight = "bold";
        this.mensajeUsuario.innerHTML = "El nombre de usuario no debe comenzar ni finalizar con un punto";
        return false;
    }

}

function validarEmail()
{
    var valor = this.email.value;
    var regEx = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

    if(valor.search(regEx)==0)
    {
        this.email.style.borderColor= "green";
        this.mensajeEmail.innerHTML = " ";
        return true;
    }
    else
    {
        this.email.style.borderColor= "red";
        this.mensajeEmail.style.color = "red";
        this.mensajeEmail.style.fontWeight = "bold";
        this.mensajeEmail.innerHTML = "Dirección de url incorrecta, recuerda que debe ser de esta forma: algo@algo.com";
        return false;
    }
    
}

function validarPassword()
{
    var valor = this.password.value;
    var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

    if(valor.search(regEx)==0)
    {
        this.password.style.borderColor= "green";
        this.mensajeEmail.innerHTML = " ";
        return true;
    }
    else
    {
        this.password.style.borderColor= "red";
        this.mensajePassword.style.color = "red";
        this.mensajePassword.style.fontWeight = "bold";
        this.mensajePassword.innerHTML = "El password debe contener numeros, letras mayúsculas y minúsculas de entre 4 a 8 caracteres";
        return false;
    }

}

function validacion()
{
    var username = validarUserName();
    var email = validarEmail();
    var password = validarPassword();

    if( username && email && password)
    {
        document.getElementById("divLogin").style.display = "none";
        document.getElementById("divBienvenida").style.display = "block";
    }
    
}
