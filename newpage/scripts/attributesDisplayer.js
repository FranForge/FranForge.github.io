
function getColorFor(name)
{
    switch  (name)
    {
        case "AAA":
        case "AA":
        case "Indie":
        case "Solo":
            return "#3D8A53";
        case "2D":
        case "3D":
            return "#915D29";
        case "Unity":
        case "Unreal":
        case "Blender":
            return "#372991";
        case ".NET":
            return "#6C3D8A";
        case "C#":
        case "C++":
        case "Bolt":
        case "HTML":
        case "CSS":
        case "JS":
            return "#8A3D84";
        case "Git":
        case "Plastic":
            return "#8A413D";
    }
}

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
            card.style.backgroundColor = getColorFor(attributes[j]);
            container.appendChild(card);
        }
    }
}

displayAttributes();