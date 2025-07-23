
// Seleccionamos el header por su ID. Es más robusto que usar la etiqueta.
const header = document.querySelector('#main-header');

// Guardamos las clases del estado "scrolled" en una variable para más limpieza
const scrollClasses = ['bg-background', 'dark:bg-slate-900/95', 'backdrop-blur-sm', 'shadow-md'];

// La función que se ejecutará cada vez que el usuario haga scroll
const handleScroll = () => {
    if (window.scrollY > 10) {
        // El método .add() puede aceptar múltiples clases a la vez
        header.classList.add(...scrollClasses);
    } else {
        header.classList.remove(...scrollClasses);
    }
};

// Añadimos el "oyente" al evento de scroll de la ventana
window.addEventListener('scroll', handleScroll);

// Opcional pero recomendado: Ejecutar la función una vez al cargar
// por si el usuario recarga la página a mitad del scroll.
document.addEventListener('DOMContentLoaded', handleScroll);
