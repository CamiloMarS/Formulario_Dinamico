var username = document.getElementById("txtUsername");
var email = document.getElementById("txtUseremail");
var password = document.getElementById("txtUserpassword");
var mensajeUsuario = document.getElementById("imgUsername");
var mensajeCorreo = document.getElementById("imgEmail");
var mensajePassword = document.getElementById("imgPassword");
var music = new Audio("./media/shootingstar.mp3");
var rutaImg = "./media/img/";
var boton = document.getElementById("btnIngresar");

var validaUserName = false;
var validaUserEmail = false;
var validaPassword = false;


this.boton.disabled = true;

//Array con los valores una vez validados los campos
var numero = 0;

function validarUserName()
{
    var valor = this.username.value;
    var regEx = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    if(valor.search(regEx) == 0 )
    {
        this.mensajeUsuario.style.display = "block";
        this.mensajeUsuario.src = rutaImg + "checked.png";
        //this.validaUserName = true;
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
        //this.validaUserEmail = true;
        return true;
    }
    else
    {
        this.mensajeCorreo.style.display = "block";
        this.mensajeCorreo.src = rutaImg + "error.png";
        this.email.placeholder = "Email incorrecto";
        //this.validaPassword = true;
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
            validarUserName();
            //arrayUser.push(validaUserName);        
        }
    );

    email.addEventListener(
        "keypress", function(e)
        {
            validarEmail();
            //arrayEmail.push(validaUserEmail);
        }
    );

    password.addEventListener(
        "keypress", function(e)
        {
            validarPassword();
            validar();
            //console.log("user: "+this.validaUserName+" email: "+this.validaUserEmail+" password: "+this.validaPassword);  
        }
    );

    function validar()
    {
        var imguser = document.getElementById("imgUsername");
        var imgemail = document.getElementById("imgEmail");
        var imgpassword = document.getElementById("imgPassword");

        imguser = imguser.src;
        imguser = imguser.substring(65,imguser.lenght);
        imgemail = imgemail.src;
        imgemail = imgemail.substring(65,imgemail.lenght);
        imgpassword = imgpassword.src;
        imgpassword=imgpassword.substring(65,imgpassword.lenght);
        correcto = "/media/img/checked.png";
        incorrecto = "/media/img/error.png";

        if(imguser == correcto && imgemail == correcto && imgpassword == correcto)
        {
            activar();
            bienvenida();
        }
    }



function activar(){
        this.boton.disabled = false;
        bienvenida();
}

function bienvenida(){
    let btn = document.querySelector("#btnIngresar");
    btn.addEventListener("click", function(){
        document.querySelector(".degragado").style.display = "none";
        document.querySelector(".login_form").style.display = "none";
        document.querySelector(".divBienvenida").style.display = "block";
        music.play();
    });
}
