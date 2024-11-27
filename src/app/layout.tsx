import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Emergency Valladolid | Incio",
  description: "Página web de la experiencia Emergency Valladolid de Roblox, encontraras información relevante de la experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>

        <nav className="p-2 px-4 flex justify-between items-center bg-gray-200 w-[90vw] justify-self-center rounded-b-xl">
          <Image src={'/images/ev-web-logo.webp'} className="w-[50px] h-[50px]" width={96} height={96} alt="EV-LOGO" style={{ margin: '0 10vw' }} />
          <ol className="flex" style={{ margin: '0 10vw' }}>
            <li><Link className="p-2 px-4 hover:border-b-2 border-black mr-2" href="/">Inicio</Link></li>
            <li><Link className="p-2 px-4 hover:border-b-2 border-black mr-2" href="https://discord.gg/6xcNWb62Mu" target="_blank">Comunidad</Link></li>
            <li><Link className="p-2 px-4 hover:border-b-2 border-black" href="https://www.roblox.com/communities/8459047/Vairos-Productions#!/about" target="_blank">Grupo</Link></li>
          </ol>
          <Link style={{ margin: '0 10vw' }} href={'https://www.roblox.com/games/18377062010/ALPHA-Emergency-Valladolid'} target="_blank" className="bg-gray-800 text-white p-1 px-4 rounded-md">Jugar EV</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
