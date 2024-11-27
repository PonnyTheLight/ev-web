import Image from "next/image";
import Link from "next/link";

import GameInfoComp from "./components/GameInfoComp";


export default function Home() {

  return (
    <main className="justify-center">

      <section className="relative w-[90%] justify-self-center">
        <Image src={'/images/mainImage.webp'} className="w-full rounded-lg mt-4 h-[700px] blur-sm object-cover" width={768} height={432} alt="mainImage" />

        <div className="absolute top-1/2 left-1/2 w-[95%] sm:w-[85%] transform -translate-x-1/2 -translate-y-1/2 text-6xl text-center">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-100">La mejor experiencia</h1>
          <h1 className="font-bold bg-clip-text text-white">Emergencias Valladolid</h1>
          <p className="text-xl text-gray-400">Sumergete en una aventura unica por valladolid como Medico, Bombero, Policia entre otos equipos de emergencias y mantenimiento de la ciudad.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center mt-6">
            <Link className="text-xl w-full bg-blue-700 border-2 border-blue-200 text-white p-2 px-4 rounded-xl mr-2" target="_blank" href={'https://www.roblox.com/games/18377062010/ALPHA-Emergency-Valladolid'} >Jugar EV</Link>
            <Link className="text-xl bg-transparent w-full border-2 border-inherit border-white text-white p-2 px-4 rounded-xl" target="_blank" href={'https://www.youtube.com/watch?v=BdkQACMQZPo&ab_channel=Vairos'} >Trailer</Link>
          </div>
        </div>
      </section>

      <GameInfoComp />

      <section className="text-center w-[90%] justify-center my-12 justify-self-center">
        <h1 className="text-2xl mb-2">¡ESTE ES NUESTRO EQUIPO!</h1>
        <div className="flex gap-12 flex-wrap justify-center">
          <div>
            <Image className="rounded-full bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2250B80B5CD4565BD2937127248E099D-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_zLowyG"></Image>
            <Link href={'https://www.roblox.com/users/1680662240/profile'} className="text-blue-600">VairosOficial</Link>
            <p className="text-gray-700">Game Founder</p>
          </div>

          <div>
            <Image className="rounded-full bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1F90BA5025883AC55EF796736F31CC80-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_zLowyG"></Image>
            <Link href={'https://www.roblox.com/users/2634949286/profile'} className="text-blue-600">zLowyG</Link>
            <p className="text-gray-700">Web Developer</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 p-4 px-4 rounded-t-xl w-[90%] justify-self-center">
        <p className="text-end">&copy; All right reserved. Vairos Productions</p>
      </footer>
    </main>
  );
}
