
//Lenguaje del navegador.
let language = navigator.language;

console.log(language);

    switch (language) {
        case "es-ES":
            console.log("Esta en espaniol");
            window.location.replace("es/home.html");
            break;
        case "en-EN":
            console.log("Esta en ingles");
            window.location.replace("en/home.html");
            break;
        default:
            console.log("Esta en otro idioma");
            window.location.replace("en/home.html");
            break;
    }
