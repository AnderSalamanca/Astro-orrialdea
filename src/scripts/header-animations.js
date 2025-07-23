const header = document.querySelector('#main-header');

// La única clase que nos importa
const scrollStateClass = 'header-scrolled';

const handleScroll = () => {
  if (window.scrollY > 10) {
    // Si hemos bajado, AÑADIMOS la clase de estado
    header.classList.add(scrollStateClass);
  } else {
    // Si estamos arriba, QUITAMOS la clase de estado
    header.classList.remove(scrollStateClass);
  }
};

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);