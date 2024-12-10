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
            <Link className="hover:scale-90 text-xl w-full bg-blue-700 border-2 border-blue-200 text-white p-2 px-4 rounded-xl mr-2" target="_blank" href={'https://www.roblox.com/games/18377062010/ALPHA-Emergency-Valladolid'} >Jugar EV</Link>
            <Link className="hover:scale-90 text-xl bg-transparent w-full border-2 border-inherit border-white text-white p-2 px-4 rounded-xl" target="_blank" href={'https://www.youtube.com/watch?v=BdkQACMQZPo&ab_channel=Vairos'} >Trailer</Link>
          </div>
        </div>
      </section>

      <GameInfoComp />

      <section className="text-center w-[90%] justify-center my-12 justify-self-center">
        <h1 className="text-2xl mb-3">¡ESTE ES NUESTRO EQUIPO ACTUAL!</h1>
        <div className="flex gap-12 flex-wrap justify-center">
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2250B80B5CD4565BD2937127248E099D-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_VairosOficial"></Image>
            <Link href={'https://www.roblox.com/users/1680662240/profile'} className="text-blue-600">VairosOficial</Link>
            <p className="text-gray-700">Game Founder</p>
          </div>
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-B7432CDEBEF967A1836BD5EE957FC998-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_eloy098"></Image>
            <Link href={'https://www.roblox.com/users/95941362/profile'} className="text-blue-600">eloy098</Link>
            <p className="text-gray-700">Game Co-Owner</p>
          </div>

          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CAAA9821CC76D8FFD7A63EE3BCB3D1F5-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_juantxete"></Image>
            <Link href={'https://www.roblox.com/users/590120827/profile'} className="text-blue-600">juantxete</Link>
            <p className="text-gray-700">--</p>
          </div>
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-65EDF08422F1BE2D4C367D0816E1DC8A-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_TobalMJ"></Image>
            <Link href={'https://www.roblox.com/users/985861937/profile'} className="text-blue-600">TobalMJ</Link>
            <p className="text-gray-700">Game Developer</p>
          </div>
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D42E6323009C812519EF9BC319BDFD4A-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_MRGAMER_03"></Image>
            <Link href={'https://www.roblox.com/users/589175438/profile'} className="text-blue-600">MRGAMER_03</Link>
            <p className="text-gray-700">Builder</p>
          </div>
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D42E6323009C812519EF9BC319BDFD4A-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_MRGAMER_03"></Image>
            <Link href={'https://www.roblox.com/users/--/profile'} className="text-blue-600">Magik</Link>
            <p className="text-gray-700">--</p>
          </div>
          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D42E6323009C812519EF9BC319BDFD4A-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_MRGAMER_03"></Image>
            <Link href={'https://www.roblox.com/users/--/profile'} className="text-blue-600">p4tkaro</Link>
            <p className="text-gray-700">--</p>
          </div>

          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-F64D8BCDAC96CC1BCA0E0626E1A0C18E-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_AlexProOfficial"></Image>
            <Link href={'https://www.roblox.com/users/3392027959/profile'} className="text-blue-600">AlexProOficial</Link>
            <p className="text-gray-700">Game Developer</p>
          </div>

          <div className="hover:scale-110">
            <Image className="rounded-full justify-self-center bg-blue-500" src={'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1F90BA5025883AC55EF796736F31CC80-Png/150/150/AvatarHeadshot/Webp/noFilter'} width={100} height={100} alt="UserProfile_zLowyG"></Image>
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
