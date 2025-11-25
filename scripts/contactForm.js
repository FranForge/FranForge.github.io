//Espera a que el DOM se haya cargado.
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    console.log("Form encontrado:", form);

    form.addEventListener("submit", async (e) => {

        console.log(`Submit ejecutado desde ${window.location.origin}`);

        //Evita que recargue la web.
        e.preventDefault();

        //Crea el formulario.
        const formData = new FormData(form);
        console.log("Formulario creado con exito.");

        try {
            const result = await fetch("https://api.franforge.es/api/ContactForm/send", {
                method: "POST",
                body: formData
            });

            if (!result.ok) {
                const text = await result.text();
                console.error("Respuesta no OK:", result.status, text);
                displayError(text);
                return;
            }

            console.log("Formulario enviado correctamente");
            displaySuccess();

        } catch (err) {
            console.error("Error enviando formulario");
            displayError(error);
        }
    });
});

//Muestra la confirmacion en pantalla.
function displaySuccess()
{
    const successContainer = document.getElementById("contact-submit-successfully-message");
    if(successContainer == undefined) return;

    successContainer.classList.add("show");

    setTimeout(() => hideMessage(successContainer), 5000);
}

//Muestra el error en pantalla ademas de la advertencia.
function displayError(errorText)
{
    const errorContainer = document.getElementById("contact-submit-failed-message");
    if(errorContainer == undefined) return;

    errorContainer.classList.add("show");

    const errorMessage = document.getElementById("contact-submit-failed-error");
    errorMessage.textContent = errorText;

    setTimeout(() => hideMessage(errorContainer), 5000);
}

//Espera x segundos y oculta el mensaje.
function hideMessage(element)
{
    element.classList.remove("show");
}