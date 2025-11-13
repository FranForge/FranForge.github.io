
//Construye la pagina principal.
function buildHomePage(data)
{
    buildGameCards(data);

    initEffects();
}

//Funcion que se encarga de construir las tarjetas de los juegos asignandoles la informacion.
function buildGameCards(data)
{
    //Recoge todos los contenedores de cartas de juegos para agregarlas.
    const gameCardsContainer = document.querySelectorAll('.game-cards-container');

    //Recorre todos los contenedores de cartas para crear los elementos.
    for(let i = 0; i < gameCardsContainer.length; i++)
    {
        //Accede al contenedor.
        const container = gameCardsContainer[i];

        //Accede a todas las tarjetas.
        const cardsId = container.dataset.cardsId.split(',');
        const cardsLinks = container.dataset.cardsLinks.split(',');

        if(cardsId.length != cardsLinks.length)
            console.error("No deberian ser diferente tamanio, falta algun link o ID");

        //Registra las variables para crear la ruta completa.
        const folderPath = container.dataset.folderPath;
        const pageName = container.dataset.pageName;

        //Recorre todas las tarjetas creando el articulo.
        for (let j  = 0; j < cardsId.length; j++)
        {
            //Recorre todos los proyectos hasta encontrar uno con el nombre identico al pasado.
            for(let k = 0; k < data.projects.length; k++)
            {
                if(data.projects[k].name == cardsId[j])
                {
                    console.log(`Encontrado proyecto ${cardsId[j]}`);
                    const path = `${folderPath}/${cardsLinks[j]}`;
                    buildGameCard(data.projects[k], container, path, pageName);
                    break;
                }
            }
        }
    }
}

//Crea la plantilla del juego y la asigna a un contenedor.
function buildGameCard(data, container, path, pageName)
{
    //Crea el articulo con vinculo.
            const article = document.createElement('a');
            article.href = `${path}/${pageName}`;

            //Crea un titulo.
            const title = document.createElement('h2');
            title.textContent = data["name"];
            article.appendChild(title);

            //Crea una descripcion.
            const description = document.createElement('p');
            description.textContent = data["role-description"];
            article.appendChild(description);

            //Crea un divisor.
            const divisor = document.createElement('div');
            article.appendChild(divisor);

            //Crea la seccion de fecha en la que participe.
            const jobDate = document.createElement('p');
            jobDate.textContent = data["job-date"];
            article.appendChild(jobDate);

            //Crea la seccion de atributos.
            const attributesSection = document.createElement('section');
            attributesSection.className = "attributes-container";
            let attributesList = "";
            
            //Obtiene todos los atributos.
            for (let i = 0; i < data["attributes"].length; i++)
            {
                if(i == data["attributes"].length -1)
                {
                    attributesList += `${data["attributes"][i]}`;
                }
                else
                {

                    attributesList += `${data["attributes"][i]},`;
                }
            }

            attributesSection.dataset.attributes = attributesList;
            container.appendChild(attributesSection);

            //Crea la imagen con relacion a la ruta.
            const thumbnail = document.createElement('img');
            thumbnail.src = `${path}/thumbnail.webp`;
            thumbnail.alt = `${data["name"]} ${GetLocalized("thumbnail")}.`;
            container.appendChild(thumbnail);

            //Crea la decoracion de leer más.
            const readMore = document.createElement('div');
            readMore.className = "read-more";
            readMore.textContent = "Read more";
            container.appendChild(readMore);

            container.appendChild(article);
}

//Suscribe al evento de carga de datos desencapsulando los datos.
window.addEventListener('orchestratorBuildersInitialize', (event) => {
    const loadedData = event.detail.data;
    buildHomePage(loadedData);
});