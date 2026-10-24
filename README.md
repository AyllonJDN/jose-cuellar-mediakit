# Media Kit — José Cuellar / El Pez en el Agua

Página vertical (tipo documento) con el media kit de colaboraciones de José
Cuellar, con diseño editorial en tonos de agua (degradados teal → cian →
aqua) y descarga a PDF manteniendo el mismo diseño.

Fuente principal del contenido: `20261023_ Jose Cuellar_Media Kit` (bio,
plataformas y tarifario corregido). La sección "Presencia en medios" usa
la lista de entrevistas/colaboraciones del media kit corporativo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

- `app/page.tsx` — toda la página (hero, bio, plataformas, presencia en
  medios, tarifario, contacto).
- `components/DownloadPdfButton.tsx` — botón "Descargar PDF": captura el
  documento con `html2canvas` y lo pagina a A4 con `jsPDF`, preservando el
  diseño exacto de la web.
- `components/Reveal.tsx` — animaciones de aparición al hacer scroll.
- `components/WaveDivider.tsx` — divisor de ola entre secciones.
- `public/photos/jose.jpg` — foto de José.

## Publicar

Sube el repo a GitHub y conéctalo en [vercel.com](https://vercel.com) con
"Add New → Project → Import" — se publica solo, sin configuración extra.
