//Se suscribe a todos los botones de carrusel del html.
function suscribeToCarrouselButtons()
{
    document.querySelectorAll('.carrousel-container button')
        .forEach(button => {

            button.addEventListener("click", () => {

                //Obtiene el carrusel al que pertenece.
                const container = button.closest('.carrousel-container');

                //Accede a los datos del boton.
                const direction = Number(button.dataset.direction);

                //Si la direccion no se ha establecido se asume que es hacia delante.
                if(isNaN(direction) || direction >= 0)
                {
                    moveCarrouselRight(container);
                }
                //Si la direccion es menor a 0 es hacia detras.
                else
                {        
                    moveCarrouselLeft(container);
                }
            });

        });
}

//Inicializa un carrusel.
function initializeCarrousel(carrouselContainer)
{
    //Si el carrusel no tiene aun una propiedad indice se crea y asigna a 0.
    if (carrouselContainer.index === undefined) 
    {
        carrouselContainer.index = 0;
    }

    displayCarousel(carrouselContainer);
}

//Inicializa todos los carruseles.
function initializeCarrousels()
{
    document.querySelectorAll('.carrousel-container')
        .forEach(carrousel => {
            initializeCarrousel(carrousel);
        });
}

//Devuelve las rutas de las imagenes del carrusel.
function getCarrouselPaths(carrouselContainer)
{
    //Obtiene el path de la carpeta.
    const path = carrouselContainer.dataset.carrouselPath;

    //Obtiene el nombre de cada imagen.
    const imageNames = carrouselContainer.dataset.carrouselImages.split(',');

    //Crea el array de las rutas completas a las imagenes.
    let completePaths = [];

    //Recorre todas las imagenes y las asigna al array junto a su ruta completa.
    for(let i = 0; i < imageNames.length; i++)
    {
        completePaths.push(`${path}/${imageNames[i]}`);
    }

    return completePaths;
}

//Obtiene el largo del carrusel.
function getCarrouselLength(carrouselContainer)
{
    return carrouselContainer.dataset.carrouselImages.split(',').length;
}

//Mueve el indice del carrusel hacia la izquierda.
function moveCarrouselLeft(carrouselContainer)
{
    //Obtiene el largo.
    const length = getCarrouselLength(carrouselContainer);

    //Obtiene el indice calculado con uno menos.
    const index = carrouselContainer.index - 1;

    //Si el indice es menor a 0 da la vuelta y se establece en el mayor.
    if(index < 0)
    {
        carrouselContainer.index = length - 1;
    }
    //Si no se establece en el indice calculado.
    else
    {
        carrouselContainer.index = index;
    }

    displayCarousel(carrouselContainer);
}

//Mueve el indice del carrusel hacia la derecha.
function moveCarrouselRight(carrouselContainer)
{
    //Obtiene el largo.
    const length = getCarrouselLength(carrouselContainer);

    //Obtiene el indice calculado con uno mas.
    const index = carrouselContainer.index + 1;

    //Si el indice es mayor al largo o igual se asigna a 0 dandole la vuelta al carrusel.
    if(index >= length)
    {
        carrouselContainer.index = 0;
    }
    //Si no se establece en el indice calculado.
    else
    {
        carrouselContainer.index = index;
    }

    displayCarousel(carrouselContainer);
}

//Muestra todos los carruseles de imagenes.
function displayCarousel(carrouselContainer)
{
    //Obtiene la imagen a la que afectara el carrusel.
    const carrouselImg = carrouselContainer.querySelector('.carrousel-img');

    //Obtiene todas las imagenes del carrusel en un array.
    const imagePaths = getCarrouselPaths(carrouselContainer);

    const index = Number(carrouselContainer.index);
    // console.log(`Intentando establecer imagen ${index} (${imagePaths[index]})`);
    carrouselImg.src = imagePaths[index];
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCarrousels();
    suscribeToCarrouselButtons();
});