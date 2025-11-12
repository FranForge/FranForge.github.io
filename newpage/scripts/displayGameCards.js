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
        //Crea el articulo con vinculo.
        const article = document.createElement('a');
        article.href = `${folderPath}/${cardsLinks[j]}/${pageName}`;

        //Crea un titulo.
        const title = document.createElement('h2');
        title.textContent = cardsId[j];
        article.appendChild(title);

        //Crea una descripcion.
        const description = document.createElement('p');
        description.textContent = cardsId[j];
        article.appendChild(description);

        container.appendChild(article);
    }
}