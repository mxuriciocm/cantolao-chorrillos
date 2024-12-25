/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores personalizados
        gold: {
          light: '#FFD700', // Dorado claro vibrante
          DEFAULT: '#F59E0B', // Dorado principal
          dark: '#D97706', // Dorado oscuro
        },
        gray: {
          darkest: '#1E293B', // Gris oscuro profundo (para títulos)
          dark: '#374151', // Gris oscuro medio (para subtítulos)
          DEFAULT: '#6B7280', // Gris medio claro (para texto)
          light: '#9CA3AF', // Gris claro
        },
        white: {
          DEFAULT: '#FFFFFF', // Blanco puro
          soft: '#F8FAFC', // Blanco suave (para fondos claros)
        },
        accent: {
          yellow: '#FCD34D', // Amarillo claro cálido (para acentos)
          orange: '#FACC15', // Amarillo-naranja vibrante (para hover y acentos)
        },
      },
    },
  },
  plugins: [],
};
