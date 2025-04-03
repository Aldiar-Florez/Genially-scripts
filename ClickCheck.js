let checkGeniallyLoaded = setInterval(() => {
    let elementos = [
        document.querySelector("[name='elemento1']"),
        document.querySelector("[name='elemento2']"),
        document.querySelector("[name='elemento3']")
    ];
    let boton = document.querySelector("[name='botonAvanzar']");
    
    if (elementos.every(el => el) && boton) { // Si todos los elementos existen
        clearInterval(checkGeniallyLoaded);
        iniciarInteractividad(elementos, boton);
    }
}, 500); // Verifica cada 500ms hasta que los elementos existan

function iniciarInteractividad(elementos, boton) {
    let contador = 0;

    // Deshabilitar botón de avanzar al inicio
    boton.style.pointerEvents = "none";
    boton.style.opacity = "0.5"; 

    // Agregar eventos de clic a los elementos
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
}

