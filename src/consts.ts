import type { Site, Links, Socials, Features, Prices, Questions } from "@types";

// Global
export const SITE: Site = {
  title: "Cantolao Chorrillos",
  description: `¡Ven y forma parte de la Academia Deportiva Cantolao Sede Chorrillos! ¿A tu hijo le gusta el fútbol?, ayúdalo a desarrollar todo su potencial… ⚽️⚽️🥅 Nos especializamos en la formación de niños desde los 3 años, ofreciendo fútbol a medida, que incluye preparación física, técnica y táctica. Nuestros entrenadores altamente capacitados se aseguran de que tu hijo aprenda las habilidades esenciales para el éxito en el campo de juego, mientras se divierte y desarrolla su pasión por el deporte.¡Únete a nuestra gran familia deportiva hoy mismo y descubre por qué Cantolao Sede Chorrillos es la elección perfecta para tu hijo! ¡Contáctanos para más información!`,
  author: "Mauricio Chacon Martinez",
};

// Links
export const LINKS: Links = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Categorías",
    href: "/categorias",
  },
  {
    text: "Ubicación",
    href: "/ubicacion",
  },
  {
    text: "Test",
    href: "/1",
  },
  {
    text: "Test",
    href: "/1",
  },
];

// Features
export const FEATURES: Features = [
  {
    name: "Entrenadores de élite",
    description:
      "Nuestro equipo de entrenadores cuenta con experiencia profesional y certificaciones internacionales.",
    icon: "star",
  },
  {
    name: "Metodología probada",
    description:
      "Utilizamos métodos de entrenamiento modernos que han producido jugadores de nivel nacional e internacional.",
    icon: "trophy",
  },
  {
    name: "Desarrollo integral",
    description:
      "Fomentamos no solo habilidades futbolísticas, sino también valores como el trabajo en equipo y la disciplina.",
    icon: "person",
  },
];

export const SOCIALS: Socials = [
  {
    name: "Facebook",
    icon: "facebook",
    text: "Cantolao Chorrillos",
    href: "https://www.facebook.com/CantolaoChorrilloss/?locale=es_LA",
  },
  {
    name: "Instagram",
    icon: "instagram",
    text: "Cantolao Chorrillos",
    href: "https://www.instagram.com/cantolao.chorrillos/",
  },
  {
    name: "Youtube",
    icon: "youtube",
    text: "Cantolao Chorrillos",
    href: "https://www.instagram.com/cantolao.chorrillos/",
  },
];

export const PRICES: Prices = [
  {
    name: "Mensualidad",
    description:
      "Pago mensual que asegura 12 clases, disponibles a partir de la fecha de inscripción, y acceso total a los servicios de la academia.",
    icon: "",
    price: "200",
    discount: "190",
  },
  {
    name: "Matrícula",
    description:
      "Pago único de inscripción. Se cobrará nuevamente tras ausencias mayores a 6 meses.",
    icon: "",
    price: "100",
    discount: "0",
  },
  {
    name: "Uniforme",
    description:
      "Incluye polo, short y medias. Disponible en versiones de competencia, entrenamiento y alterno.",
    icon: "",
    price: "100",
    discount: "",
  },
];

export const QUESTIONS: Questions = [
  {
    question: "¿Cómo puedo inscribirme en la academia?",
    answer:
      "Puedes inscribirte en nuestra academia visitando nuestra página de inscripciones y completando el formulario en línea.",
  },
  {
    question: "¿Qué edades pueden participar en los entrenamientos?",
    answer:
      "Nuestros entrenamientos están disponibles para niños y adultos desde los 5 hasta los 40 años, con grupos divididos por edades y niveles.",
  },
  {
    question: "¿Necesito experiencia previa en fútbol para unirme?",
    answer:
      "No es necesario tener experiencia previa. Ofrecemos entrenamientos para principiantes, intermedios y avanzados.",
  },
  {
    question: "¿Cuáles son los horarios de entrenamiento?",
    answer:
      "Los horarios varían según el grupo de edad y nivel, pero generalmente ofrecemos entrenamientos de lunes a viernes en horarios vespertinos y los sábados por la mañana.",
  },
  {
    question: "¿La academia ofrece clases de fútbol femenino?",
    answer:
      "Sí, ofrecemos clases y equipos de fútbol femenino en diferentes categorías y niveles de habilidad.",
  },
  {
    question: "¿Qué equipo necesito para entrenar?",
    answer:
      "Solo necesitas ropa deportiva cómoda, zapatillas adecuadas para fútbol y una pelota. Proporcionamos el resto del equipo necesario durante las sesiones.",
  },
  {
    question: "¿Hay programas de verano o campamentos de fútbol?",
    answer:
      "Sí, durante las vacaciones de verano organizamos campamentos intensivos de fútbol para mejorar habilidades y disfrutar del deporte.",
  },
  {
    question: "¿Cómo puedo unirme a un equipo competitivo?",
    answer:
      "Una vez que completes el proceso de inscripción y asistencia a los entrenamientos, nuestros entrenadores evaluarán tu nivel y podrán recomendarte para unirte a uno de nuestros equipos competitivos.",
  },
  {
    question: "¿Puedo hacer una clase de prueba antes de inscribirme?",
    answer:
      "Sí, ofrecemos una clase de prueba gratuita para que puedas conocer nuestra metodología de entrenamiento y decidir si es adecuado para ti.",
  },
  {
    question: "¿La academia organiza partidos amistosos o torneos?",
    answer:
      "Sí, organizamos partidos amistosos y torneos internos para que nuestros jugadores puedan poner en práctica sus habilidades en situaciones reales de juego.",
  },
];
