import type { Metadata } from "next";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Kit — José Cuellar / El Pez en el Agua",
  description:
    "Media kit de colaboraciones: José Cuellar, economista y especialista en gestión y comunicación del agua.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
