'use client';
import React, { useState } from 'react'

import Image from "next/image";
import Link from "next/link";

export default function NavbarComp() {

    const [mobileOpened, setMobileOpened] = useState(false)
    const handleMobileButton = () => {
        const bar = document.getElementById('mobile-menu')

        if (bar) {
            if (mobileOpened) {
                bar.classList.add('hidden')
                bar.classList.remove('absolute')
                setMobileOpened(false)
            } else {
                bar.classList.remove('hidden')
                bar.classList.add('absolute')
                setMobileOpened(true)
            }
        }
    }
    return (
        <nav className={`p-2 relative px-4 flex justify-between place-items-center items-center bg-gray-200 w-[90%] h-[70px] justify-self-center ${!mobileOpened ? 'rounded-b-xl' : ''}`}>
            <Image src={'/images/ev-web-logo.webp'} className="w-[50px] h-[50px] rounded-md" width={96} height={96} alt="EV-LOGO" />
            <ol className="hidden sm:flex">
                <li><Link className="p-2 px-4 hover:border-b-2 border-black mr-2" href="/">Inicio</Link></li>
                <li><Link className="p-2 px-4 hover:border-b-2 border-black mr-2" href="https://discord.gg/6xcNWb62Mu" target="_blank">Comunidad</Link></li>
                <li><Link className="p-2 px-4 hover:border-b-2 border-black" href="https://www.roblox.com/communities/8459047/Vairos-Productions#!/about" target="_blank">Grupo</Link></li>
            </ol>
            <Link href={'https://www.roblox.com/games/18377062010/ALPHA-Emergency-Valladolid'} target="_blank" className="hidden hover:scale-90 sm:block bg-gray-800 text-white p-1 px-4 rounded-md">Jugar EV</Link>
            <button onClick={handleMobileButton} type="button" className="sm:hidden"><Image src={'/images/menu.svg'} width={25} height={25} alt="MenuSVG"></Image></button>

            <div className="hidden sm:hidden top-[65px] w-full left-0 bg-gray-200 z-10 rounded-b-xl" id="mobile-menu">
                <div className="px-2 pb-3 pt-2">
                    <Link className="p-2 block px-4 hover:bg-gray-300 focus:bg-gray-300 rounded-md mb-1" href="/">Inicio</Link>
                    <Link className="p-2 block px-4 hover:bg-gray-300 focus:bg-gray-300 rounded-md mb-1" href="https://discord.gg/6xcNWb62Mu" target="_blank">Comunidad</Link>
                    <Link className="p-2 block px-4 hover:bg-gray-300 focus:bg-gray-300 rounded-md" href="https://www.roblox.com/communities/8459047/Vairos-Productions#!/about" target="_blank">Grupo</Link>

                    <Link href={'https://www.roblox.com/games/18377062010/ALPHA-Emergency-Valladolid'} target="_blank" className="w-full hover:scale-90 mt-4 flex justify-center sm:block bg-gray-800 text-white p-1 px-4 rounded-md">Jugar EV</Link>
                </div>
            </div>
        </nav>
    )
}
