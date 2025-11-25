//Manda un ping cada x tiempo a la api para activarla.
setInterval(() => {

    fetch("https://api.franforge.es/api/ping")
        .catch(() => {

        });

}, 5 * 60 * 1000); //Se ejecuta cada 5 minutos mientras esta navegando el usuario.