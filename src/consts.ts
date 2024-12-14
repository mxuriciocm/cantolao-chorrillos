import type { Site, Page, Links, Socials, Stats, Features } from "@types";

// Global
export const SITE: Site = {
  title: "Cantolao",
  description: `¡Ven y forma parte de la Academia Deportiva Cantolao Sede Chorrillos! ¿A tu hijo le gusta el fútbol?, ayúdalo a desarrollar todo su potencial… ⚽️⚽️🥅 Nos especializamos en la formación de niños desde los 3 años, ofreciendo fútbol a medida, que incluye preparación física, técnica y táctica. Nuestros entrenadores altamente capacitados se aseguran de que tu hijo aprenda las habilidades esenciales para el éxito en el campo de juego, mientras se divierte y desarrolla su pasión por el deporte.¡Únete a nuestra gran familia deportiva hoy mismo y descubre por qué Cantolao Sede Chorrillos es la elección perfecta para tu hijo! ¡Contáctanos para más información!`,
  author: "Mauricio Chacon Martinez",
};

// Pages

// Links
export const LINKS: Links = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Prueba 1",
    href: "/1",
  },
  {
    text: "Pueba 2",
    href: "/2",
  },
];

// Stats
export const STATS: Stats = [
  {
    data: "10+",
    title: "Años de Experiencia",
  },
  {
    data: "1K+",
    title: "Jugadores Formados",
  },
  {
    data: "100+",
    title: "Torneos participados",
  },
];

// Features
export const FEATURES: Features = [
  {
    name: 'Entrenadores de élite',
    description: 'Nuestro equipo de entrenadores cuenta con experiencia profesional y certificaciones internacionales.',
    icon: 'star',
  },
  {
    name: 'Metodología probada',
    description: 'Utilizamos métodos de entrenamiento modernos que han producido jugadores de nivel nacional e internacional.',
    icon: 'trophy',
  },
  {
    name: 'Desarrollo integral',
    description: 'Fomentamos no solo habilidades futbolísticas, sino también valores como el trabajo en equipo y la disciplina.',
    icon: 'person'
  },
];
