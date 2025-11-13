
//Muestra los atributos de un contenedor.
function displayAttributes()
{
    //Obtiene todos los contenedores de atributos.
    const attributeContainers = document.querySelectorAll('.attributes-container');

    //Recorre todos los contenedores de atributos y agrega los atributos como tarjetas.
    for (let i = 0; i < attributeContainers.length; i++)
    {
        const container = attributeContainers[i];

        //Obtiene los atributos del contenedor.
        const attributes = container.dataset.attributes.split(',');

        //Recorre todos los atributos y crea un div por cada uno.
        for (let j = 0; j < attributes.length; j++)
        {
            const card = document.createElement('div');
            card.className = 'attribute-card';
            card.textContent = attributes[j];
            container.appendChild(card);
        }
    }
}

//Se suscribe al evento del orquestador.
window.addEventListener('orchestratorEffectsInitialize', displayAttributes);