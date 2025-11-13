let globalData;

//Funcion que carga los datos.
async function loadData()
{
    try
    {
        const path = `../data-${language}.json`;

        const response = await fetch(path);

        //Lanza un error si no se han podido cargar.
        if(!response.ok)
        {
            throw new Error("Error al cargar los datos");
        }

        //Recoge los datos del json.
        globalData = await response.json();

        //Si los datos no son nulos.
        if(globalData != undefined)
        {
            console.log("Datos cargados y traducidos correctamente");
            initBuilders(globalData);
            // const dataLoadedEvent = new CustomEvent('appDataLoaded', {detail: {data: data}});
            // window.dispatchEvent(dataLoadedEvent);
        }
    }
    catch (error)
    {
        console.error("Hubo un error durante la carga de datos", error);
    }
}

window.addEventListener('orchestratorInitialize', loadData);