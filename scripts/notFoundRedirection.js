
//Notifica el error a la API para enterarme del error.
function notifyError()
{
    //Ahora mismo no puedo hacer nada no hay metodos en la API para esto.
    redirect();
}

//Redirecciona a la pagina principal.
function redirect()
{
    window.location.replace("index.html");
}

setTimeout(notifyError, 5000);