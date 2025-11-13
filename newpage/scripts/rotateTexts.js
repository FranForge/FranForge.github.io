
function displayRotatingTexts()
{
    //Obtiene todos los textos que contengan rotating-text class.
    const rotateTextSpans = document.querySelectorAll('.rotating-text');

    //Recorre todos los elementos de rotateTextSpans para mostrarlos.
    for (let i = 0; i < rotateTextSpans.length; i++)
    {
        const span = rotateTextSpans[i];
        const texts = span.dataset.texts.split(',');
        let index = 0;
        let letterIndex = 0;

        //Escribe las letras.
        function typeLetter() {
            const text = texts[index];
            span.textContent += text[letterIndex];
            letterIndex++;

            //Si las letras que se han escrito son mayores se pasa al siguiente texto.
            if (letterIndex >= text.length) 
            {
                // Espera antes de pasar al siguiente texto.
                setTimeout(nextText, 1500);
            } 
            //Si no escribe de nuevo la letra.
            else
            {
                setTimeout(typeLetter, 100);
            }
        }

        // Función que prepara el siguiente texto
        function nextText() {
            index = (index + 1) % texts.length;
            letterIndex = 0;
            span.textContent = "";
            typeLetter();
        }

        typeLetter();
    }
}

//Se suscribe al evento del orquestador.
window.addEventListener('orchestratorEffectsInitialize', displayRotatingTexts);