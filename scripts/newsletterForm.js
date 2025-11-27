//Espera a que el DOM se haya cargado.
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("newsletter-form");
    console.log("Form encontrado:", form);

    form.addEventListener("submit", async (e) => {

        console.log(`Submit ejecutado desde ${window.location.origin}`);

        //Evita que recargue la web.
        e.preventDefault();

        //Crea el formulario.
        const formData = new FormData(form);
        const email = formData.get("Email");
        formData.remove("Email");
        formData.append("Id", email);
        console.log("Formulario creado con exito.");

        try {
            const result = await fetch("https://api.franforge.es/api/NewsletterRequests/subscribe", {
                method: "POST",
                body: formData
            });

            if (!result.ok) {
                const text = await result.text();
                console.error("Respuesta no OK:", result.status, text);
                displayNewsletterError(text);
                return;
            }

            console.log("Formulario enviado correctamente");
            displayNewsletterSuccess();
            form.reset();

        } catch (err) {
            console.error("Error enviando formulario", err);
            displayNewsletterError(err.message || "Something went wrong.");
        }
    });
});

//Muestra la confirmacion en pantalla.
function displayNewsletterSuccess()
{
    const successContainer = document.getElementById("newsletter-success");
    if(successContainer == undefined) return;

    successContainer.classList.add("show");

    setTimeout(() => hideNewsletterMessage(successContainer), 5000);
}

//Muestra el error en pantalla ademas de la advertencia.
function displayNewsletterError(errorText)
{
    const errorContainer = document.getElementById("newsletter-failed");
    if(errorContainer == undefined) return;

    errorContainer.classList.add("show");

    const errorMessage = document.getElementById("newsletter-error");
    errorMessage.textContent = errorText;

    setTimeout(() => hideNewsletterMessage(errorContainer), 5000);
}

//Espera x segundos y oculta el mensaje.
function hideNewsletterMessage(element)
{
    element.classList.remove("show");
}