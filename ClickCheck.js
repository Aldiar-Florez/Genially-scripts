document.addEventListener("DOMContentLoaded", function () {
    let elementos = [
        document.querySelector("[name='elemento1']"),
        document.querySelector("[name='elemento2']"),
        document.querySelector("[name='elemento3']")
    ];
    let boton = document.querySelector("[name='botonAvanzar']");
    let contador = 0;

    if (!boton || elementos.includes(null)) {
        console.error("No se encontraron los elementos. Revisa los nombres en Genially.");
        return;
    }

    boton.style.pointerEvents = "none";
    boton.style.opacity = "0.5"; 

    elementos.forEach((elemento) => {
        elemento.addEventListener("click", function () {
            if (!this.classList.contains("clicado")) {
                this.classList.add("clicado");
                this.style.opacity = "0.7"; 
                contador++;
            }

            if (contador >= 2) {
                boton.style.pointerEvents = "auto";
                boton.style.opacity = "1";
            }
        });
    });
});
