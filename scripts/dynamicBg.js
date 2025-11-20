
//Anima todos los fondos con la clase dynamic-bg.
function animateGradient() 
{
    const bgContainers = document.querySelectorAll('.dynamic-bg');

    if (bgContainers.length === 0) {
        console.error('No se encontraron elementos con la clase .dynamic-bg para animar.');
        return;
    }
    
    //Recorre todos los fondos animandolos.
    bgContainers.forEach(bgContainer => {
        startSingleElementAnimation(bgContainer);
    });
}

function startSingleElementAnimation(bgContainer) 
{
    const color1 = bgContainer.dataset.bgColor1;
    const color2 = bgContainer.dataset.bgColor2;
    
    let angle = 0;
    let startTime;

    function update(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        
        const elapsed = timestamp - startTime;
        
        // Rotación a 360 grados cada 5 segundos
        angle = (elapsed * 360 / 5000) % 360; 

        // Aplicar el nuevo estilo de degradado
        bgContainer.style.backgroundImage = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
        
        // 4. Solicitar el siguiente frame de animación
        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

animateGradient();