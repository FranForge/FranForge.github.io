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
                return;
            }

            console.log("Formulario enviado correctamente");

        } catch (err) {
            console.error("Error enviando formulario");
        }
    });
});