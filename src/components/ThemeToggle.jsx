// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'preact/hooks';

// Definimos los iconos que vamos a usar
const SunIcon = () => (
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);


export default function ThemeToggle() {
  // 1. ESTADO: Guardamos el tema actual ('light' o 'dark')
  // Inicializamos el estado a `null` para evitar el parpadeo en el servidor
  const [theme, setTheme] = useState(null);

  // 2. EFECTO: Se ejecuta UNA SOLA VEZ cuando el componente se monta en el navegador
  useEffect(() => {
    // Obtenemos el tema del localStorage o de las preferencias del sistema
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []); // El array vacío [] significa "ejecutar solo al montar"

  // 3. EFECTO: Se ejecuta CADA VEZ que el estado `theme` cambia
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // No hacemos nada si `theme` es `null` (al inicio)
  }, [theme]); // El [theme] significa "ejecutar cuando `theme` cambie"

  // Función que se llama al hacer clic
  const handleToggleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Si el tema aún no se ha determinado en el cliente, no mostramos nada
  if (theme === null) {
    return null;
  }
  
  return (
    <button
      onClick={handleToggleClick}
      class="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}