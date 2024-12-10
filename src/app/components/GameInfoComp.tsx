'use client';
import React, { useEffect, useState } from 'react'

interface GameInfo {
    place: {
        visits: number;
        favoritedCount: number;
        playing: number;
    },
    votes: {
        upVotes: number;
    }
}

export default function GameInfoComp() {
    const [info, setInfo] = useState<GameInfo>()
    useEffect(() => {
        (async () => {
            const info = await fetch('/api/placeinfo', {
                method: 'GET'
              })
          
            const info_parsed = await info.json()
            setInfo(info_parsed)
            console.log(info_parsed)
            console.log(info_parsed.votes)
        })();
    }, [])
  return (
    <section className='flex flex-col justify-center text-center my-12'>
        <h1 className='text-2xl'>¡NUESTROS USUARIOS DECIDEN!</h1>
        <p className='text-lg text-gray-500'>Nuestro usuarios deciden si nuestro juego cumple lo que promete.</p>
        <div className='grid grid-cols-2 sm:flex gap-20 sm:gap-20 text-center mt-6 place-self-center'>
            <div className='hover:scale-125'>
                <h1 className='text-blue-600 text-2xl mt-4 sm:mt-0'>{info?.place.visits}</h1>
                <h1>Visitas</h1>
            </div>
            <div className='hover:scale-125'>
                <h1 className='text-blue-600 text-2xl mt-4 sm:mt-0'>{info?.place.playing}</h1>
                <h1>Jugando</h1>
            </div>
            <div className='hover:scale-125'>
                <h1 className='text-blue-600 text-2xl mt-4 sm:mt-0'>{info?.place.favoritedCount}</h1>
                <h1 className=''>Favoritos</h1>
            </div>
            <div className='hover:scale-125'>
                <h1 className='text-blue-600 text-2xl mt-4 sm:mt-0'>{info?.votes.upVotes}</h1>
                <h1 className=''>Likes</h1>
            </div>
        </div>
    </section>
  )
}
