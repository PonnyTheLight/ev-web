import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

import NavbarComp from "./components/NavbarComp";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Emergency Valladolid | Incio",
  description: "Página web de la experiencia Emergency Valladolid de Roblox, encontraras información relevante de la experiencia.",
  keywords: [  
    'ev', '',
    'emergency', 'emergencia',
    'valladolid', 'Valladolid',
    'erlc', 'erlc',
    'response', 'respuesta',
    'liberty', 'libertad',
    'county', 'condado',
    'emergencies', 'emergencias',
    'er:lc', '',
    'roblox', '',
    'ro', '',
    'road', 'camino',
    'ambulance', 'ambulancia',
    'ambulances', 'ambulancias',
    'police', 'policía',
    'SWAT', 'SWAT',
    'medic', 'médico',
    'medics', 'médicos',
    'firefighters', 'bomberos',
    'fire', 'fuego',
    'door', 'puerta',
    'doors', 'puertas',
    'cars', 'coches',
    'car', 'coche',
    'new', 'nuevo',
    'special', 'especial',
    'bikes', 'motos']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <meta property="og:title" content="Emergency Valladolid - Official Website" />
        <meta property="og:description" 
          content="Website for the experience Emergency Valladolid of Roblox, there you can found relevant information about this experience." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="EVop" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${roboto.className}`}>
        <NavbarComp />

        {children}
      </body>
    </html>
  );
}
