//Realiza un Ping a la Api para activarla.
function pingApi()
{
    fetch("https://api.franforge.es/api/Ping")
        .catch(() => {

        });
}

pingApi();

//Manda un ping cada x tiempo a la api para activarla.
setInterval(pingApi, 5 * 60 * 1000);