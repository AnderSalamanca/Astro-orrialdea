// src/components/MobileMenu.jsx
import { useState } from 'preact/hooks';

// Recibimos la misma lista de enlaces que el header estático
export default function MobileMenu({ navLinks }) {
  // 1. El ESTADO: Un booleano para saber si el menú está abierto
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el estado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* El Botón de Hamburguesa */}
      <button onClick={toggleMenu} class="relative z-20">
        <svg
          class="h-6 w-6 text-slate-900 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Cambia el icono basándose en el estado 'isOpen' */}
          {isOpen ? (
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /> // Icono de 'X'
          ) : (
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /> // Icono de hamburguesa
          )}
        </svg>
      </button>

      {/* El Panel del Menú Desplegable */}
      {/* Usamos una transición de CSS para que aparezca suavemente */}
      <div
        class={`
          absolute top-0 left-0 w-full bg-slate-100 dark:bg-slate-900 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          z-10 pt-20 pb-8
        `}
      >
        <nav class="flex flex-col items-center space-y-6">
          {navLinks.map(link => (
            <a href={link.href} class="text-2xl font-bold hover:text-sky-500">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}