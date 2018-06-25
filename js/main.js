var username = document.getElementById("txtUsername");
var email = document.getElementById("txtUseremail");
var password = document.getElementById("txtUserpassword");
var mensajeUsuario = document.getElementById("imgUsername");
var mensajeCorreo = document.getElementById("imgEmail");
var mensajePassword = document.getElementById("imgPassword");
var music = new Audio("./media/shooting star.mp3");
var rutaImg = "./media/img/";
var boton = document.getElementById("btnIngresar");

this.boton.disabled = true;

function validarUserName()
{
    var valor = this.username.value;
    var regEx = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    if(valor.search(regEx) == 0 )
    {
        this.mensajeUsuario.style.display = "block";
        this.mensajeUsuario.src = rutaImg + "checked.png";
        return true;
    }
    else
    {
        this.mensajeUsuario.style.display = "block";
        this.mensajeUsuario.src = rutaImg + "error.png";
        this.username.placeholder = "Username muy incorrecto";
        return false;
    }

}

function validarEmail()
{
    var valor = this.email.value;
    var regEx = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

    if(valor.search(regEx)==0)
    {
        this.mensajeCorreo.style.display = "block";
        this.mensajeCorreo.src = rutaImg + "checked.png";
        return true;
    }
    else
    {
        this.mensajeCorreo.style.display = "block";
        this.mensajeCorreo.src = rutaImg + "error.png";
        this.email.placeholder = "Email incorrecto";
        return false;
    }
    
}

function validarPassword()
{
    var valor = this.password.value;
    var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

    if(valor.search(regEx)==0)
    {
        this.mensajePassword.style.display = "block";
        this.mensajePassword.src = rutaImg + "checked.png";
        return true;
    }
    else
    {
        this.mensajePassword.style.display = "block";
        this.mensajePassword.src = rutaImg + "error.png";
        this.password.placeholder = "Password invalida";
        return false;
    }

}


username.addEventListener
(
    "keypress", function(e)
    {
        var validaUserName = validarUserName();
        console.log("username"+validaUserName);
    
    }
);

email.addEventListener
(
    "keypress", function(e)
    {
        var validaUserEmail = validarEmail();
        console.log("email"+validaUserEmail);
    
    }
);

password.addEventListener
(
    "keypress", function(e)
    {
        var validaPassword = validarPassword();
        console.log("password"+validaPassword);
    }
);

/*
function habilitarBotonMostrarBienvenida(user, email, pass)
{
    user = this.validaUserName;
    email = this.validaUserEmail;
    pass = this.validaPassword;
    console.log("user "+user+" email "+email+" pass "+pass);
    if(this.validaUserName && this.validaUserEmail && this.validaPassword)
    {
        this.boton.disabled = false;

        if(this.boton !== null)
        {
            this.boton.addEventListener
            (
                "click", function(e)
                {
                    document.querySelector(".degragado").style.display="none";
                    document.querySelector(".login_form").style.display = "none";
                    document.querySelector(".divBienvenida").style.display = "block";    
                }
            );
        }

    }
}

habilitarBotonMostrarBienvenida();
*/