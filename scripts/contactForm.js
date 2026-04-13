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

        displayContactWarn();
        form.reset();

        try {
            const result = await fetch("https://api.franforge.es/api/ContactForm/send", {
                method: "POST",
                body: formData
            });

            closeContactWarn();

            if (!result.ok) {
                const text = await result.text();
                console.error("Respuesta no OK:", result.status, text);
                displayContactError(text);
                return;
            }

            console.log("Formulario enviado correctamente");
            displayContactSuccess();
            form.reset();

        } catch (err) {

            closeNewsletterWarn();

            console.error("Error enviando formulario", err);
            displayContactError(err.message || "Something went wrong.");
        }
    });
});

//Muestra el aviso en pantalla.
function displayContactWarn(){
    const warnContainer = document.getElementById("contact-warn");
    if(warnContainer == undefined) return;

    warnContainer.classList.add("show");
}

function closeContactWarn(){
    const warnContainer = document.getElementById("contact-warn");
    if(warnContainer == undefined) return;

    warnContainer.classList.remove("show");
}

//Muestra la confirmacion en pantalla.
function displayContactSuccess()
{
    const successContainer = document.getElementById("contact-success");
    if(successContainer == undefined) return;

    successContainer.classList.add("show");

    setTimeout(() => hideContactMessage(successContainer), 5000);
}

//Muestra el error en pantalla ademas de la advertencia.
function displayContactError(errorText)
{
    const errorContainer = document.getElementById("contact-failed");
    if(errorContainer == undefined) return;

    errorContainer.classList.add("show");

    const errorMessage = document.getElementById("contact-error");
    errorMessage.textContent = errorText;

    setTimeout(() => hideContactMessage(errorContainer), 5000);
}

//Espera x segundos y oculta el mensaje.
function hideContactMessage(element)
{
    element.classList.remove("show");
}