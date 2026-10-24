// Single source of truth for the media kit's content — both the vertical
// and the horizontal layouts read from here, so facts never drift between
// the two. Everything below comes from "20261023_ Jose Cuellar_Media Kit"
// (bio, platforms, tarifario) plus the interview list and differentiators
// from the corporate deck, and the contact slide's own handles.

export const PERSON = {
  name: "José Cuellar",
  firstName: "José",
  lastName: "Cuellar",
  role: "Economista y especialista en gestión y comunicación del agua",
  creatorOf: "El Pez en el Agua",
  tagline: "Todo en tu vida es agua.",
  photo: "/photos/jose.jpg",
  photoCutout: "/photos/jose-cutout.png",
};

export const BIO = [
  "José Cuellar es economista, con formación de posgrado vinculada a la gestión del agua y experiencia en recursos hídricos, saneamiento, regulación y articulación institucional. Su recorrido combina el conocimiento del sector con una vocación por investigar, comunicar y acercar temas técnicos a la vida cotidiana.",
  "Es creador de El Pez en el Agua, un espacio de divulgación desde el que explica cómo el agua se relaciona con las decisiones públicas, las ciudades, la economía y la vida de las personas. Su estilo une rigor, ejemplos cercanos y una comunicación dinámica.",
];

export const PLATFORMS_BLURB =
  "Colaboraciones de contenido vinculadas con el agua, la prevención, la vida cotidiana y temas de interés público, desarrolladas con un enfoque informativo y accesible.";

export const PLATFORMS = ["Instagram", "TikTok"];

export const CAPACITIES = [
  { title: "Conoce el sistema", body: "Gestión del recurso, normativa, servicio, actores y consecuencias económicas." },
  { title: "Lo sabe explicar", body: "Usa ejemplos cotidianos, preguntas, mapas, historias y humor con base técnica." },
  { title: "Lo vuelve relevante", body: "Relaciona una noticia, una decisión o un fenómeno con lo que vive la persona." },
];

export const MEDIA_PRESENCE = [
  { medio: "ATV", nota: "Entrevistas sobre El Niño." },
  { medio: "RORO Network", nota: "Conversación sobre El Niño, abastecimiento, cuencas y economía." },
  { medio: "Todo Good", nota: "Conversación sobre riesgo, medidas para familias y responsabilidad pública." },
  { medio: "Latina", nota: "Participación sobre infraestructura de agua y saneamiento en Lima Sur." },
];

export const MEDIA_NOTE = "La validación final incorporará clips, fechas y capturas autorizadas.";

export const RATES = [
  { formato: "Historia en Instagram", incluye: "Una historia con mención de marca y enlace, cuando corresponda.", precio: "500" },
  { formato: "Reel en Instagram o video en TikTok", incluye: "Una pieza de contenido publicada en una de las dos plataformas.", precio: "1,800" },
  { formato: "Video en ambas redes", incluye: "La misma pieza publicada en Instagram y TikTok.", precio: "2,300" },
];

export const RATE_NOTES = [
  "Todas las tarifas están expresadas en soles y son más IGV.",
  "La inversión publicitaria con ads se cotiza de manera semanal y por separado. No está incluida en las tarifas de publicación.",
];

export const CONTACT = {
  instagram: "@_elpezenelagua",
  email: "karla@matizuno.com",
  emailLabel: "Coordinación comercial",
  closing: "Todo en tu vida es agua.\nY entenderla cambia la manera de actuar.",
};

export const YEAR = "2026";
