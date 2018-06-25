var email = document.getElementById("txtUseremail");
var password = document.getElementById("txtUserpassword");
var username = document.getElementById("txtUsername");
//var mensajeUsuario = document.getElementById("mensajeUsername");
//var mensajeEmail = document.getElementById("mensajeEmail");
var music = new Audio("./media/shooting star.mp3");

function validarUserName()
{
    var valor = this.username.value;
    var regEx = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    if(valor.search(regEx)==0)
    {
        //this.username.style.borderColor= "green";
        //this.mensajeUsuario.innerHTML = " ";
        return true;
    }
    else
    {
        /*this.username.style.borderColor= "red";*/
        this.username.placeholder = "Username muy incorrecto";
        /*this.mensajeUsuario.style.color = "red";
        this.mensajeUsuario.style.fontWeight = "bold";
        this.mensajeUsuario.innerHTML = "Nombre de usuario incorrecto";*/
        return false;
    }

}

function validarEmail()
{
    var valor = this.email.value;
    var regEx = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

    if(valor.search(regEx)==0)
    {
       // this.email.style.borderColor= "green";
        //this.mensajeEmail.innerHTML = " ";
        return true;
    }
    else
    {
        /*this.email.style.borderColor= "red";*/
        this.email.placeholder = "Email incorrecto";
       /* this.mensajeEmail.style.color = "red";
        this.mensajeEmail.style.fontWeight = "bold";
        this.mensajeEmail.innerHTML = "Email incorrecto";*/
        return false;
    }
    
}

function validarPassword()
{
    var valor = this.password.value;
    var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

    if(valor.search(regEx)==0)
    {
        //this.password.style.borderColor= "green";
        //this.mensajeEmail.innerHTML = " ";
        return true;
    }
    else
    {
        /*this.password.style.borderColor= "red";*/
        this.password.placeholder = "Password invalida";
        /*this.mensajePassword.style = "color:red; font-weight:bold; font-size:12px;";
        this.mensajePassword.innerHTML = "Password incorrecto";*/
        return false;
    }

}
let btn_ingresar = document.querySelector("#btnIngresar");

    if(btn_ingresar!==null){
        btn_ingresar.addEventListener("click", function(e){

            var username = validarUserName();
            var email = validarEmail();
            var password = validarPassword();

             console.log(e.target);
            if( username && email && password)
            {
                document.querySelector(".degragado").style.display="none";
                document.querySelector(".login_form").style.display = "none";
                document.querySelector(".divBienvenida").style.display = "block";
            }

        });
    }


/*
 Personal y luego en equipo
-- Que salio Bien - 3 cosas
-- Que no salio tan Bien - 3 cosas
-- Propuesta para mejorar lo que no salio bien. - 2 sujerencias
*/