// 1. Seleccionamos todos los elementos que queremos animar
const sectionsToAnimate = document.querySelectorAll('.section-fade-in, .fade-in-up, .fade-in-left, .fade-in-right');

// Si no hay elementos que animar en esta página, no hacemos nada más.
if (sectionsToAnimate.length > 0) {
  
  // 2. Opciones para el observador
  const options = {

    root: null,
    rootMargin: '0px',
    threshold: 0.2

  };

  // 3. La función callback
  const callback = (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);

      }

    });
  };

  // 4. Creamos el observador
  const observer = new IntersectionObserver(callback, options);

  // 5. Le decimos que observe cada sección
  sectionsToAnimate.forEach(section => {

    observer.observe(section);

  });
}