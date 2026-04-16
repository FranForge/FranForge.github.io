// Se suscribe a todos los botones de carrusel del html.
function suscribeToCarouselButtons() {
    // Selector actualizado a .carousel
    document.querySelectorAll('.carousel button')
        .forEach(button => {
            button.addEventListener("click", () => {
                // Obtiene el carrusel al que pertenece.
                const container = button.closest('.carousel');

                // Accede a los datos del botón.
                const direction = Number(button.dataset.direction);

                // Si la dirección no se ha establecido se asume que es hacia delante.
                if (isNaN(direction) || direction >= 0) {
                    moveCarouselRight(container);
                }
                // Si la dirección es menor a 0 es hacia detrás.
                else {        
                    moveCarouselLeft(container);
                }
            });
        });
}

// Inicializa un carrusel.
function initializeCarousel(carouselContainer) {
    // Si el carrusel no tiene aún una propiedad indice se crea y asigna a 0.
    if (carouselContainer.index === undefined) {
        carouselContainer.index = 0;
    }

    displayCarousel(carouselContainer);
}

// Inicializa todos los carruseles.
function initializeCarousels() {
    // Selector actualizado a .carousel
    document.querySelectorAll('.carousel')
        .forEach(carousel => {
            initializeCarousel(carousel);
        });
}

// Devuelve las rutas de las imágenes del carrusel.
function getCarouselPaths(carouselContainer) {
    // Nombres de dataset actualizados según tu nuevo componente
    const path = carouselContainer.dataset.carouselPath;
    const imageNames = carouselContainer.dataset.carouselImages.split(',');

    // Crea el array de las rutas completas usando map (más limpio que un for)
    return imageNames.map(name => `${path}/${name}`);
}

// Obtiene el largo del carrusel.
function getCarouselLength(carouselContainer) {
    return carouselContainer.dataset.carouselImages.split(',').length;
}

// Mueve el índice del carrusel hacia la izquierda.
function moveCarouselLeft(carouselContainer) {
    const length = getCarouselLength(carouselContainer);
    let index = carouselContainer.index - 1;

    if (index < 0) {
        carouselContainer.index = length - 1;
    } else {
        carouselContainer.index = index;
    }

    displayCarousel(carouselContainer);
}

// Mueve el índice del carrusel hacia la derecha.
function moveCarouselRight(carouselContainer) {
    const length = getCarouselLength(carouselContainer);
    let index = carouselContainer.index + 1;

    if (index >= length) {
        carouselContainer.index = 0;
    } else {
        carouselContainer.index = index;
    }

    displayCarousel(carouselContainer);
}

// Muestra el estado actual del carrusel.
function displayCarousel(carouselContainer) {
    // IMPORTANTE: Al no tener clase la imagen, la buscamos directamente por etiqueta
    const carouselImg = carouselContainer.querySelector('img');

    const imagePaths = getCarouselPaths(carouselContainer);
    const index = Number(carouselContainer.index);

    if (carouselImg && imagePaths[index]) {
        carouselImg.src = imagePaths[index];
    }
}

// Ejecución al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    suscribeToCarouselButtons();
});