import { NextResponse } from "next/server";

export async function GET() {
    try {

        const universeID = await fetch('https://apis.roblox.com/universes/v1/places/18377062010/universe', {
            method: 'GET'
          })
        
        const data = await universeID.json()

        const PlaceInfo = await fetch(`https://games.roblox.com/v1/games?universeIds=${data.universeId}`, {
            method: 'GET'
          })

        const VotesInfo = await fetch(`https://games.roblox.com/v1/games/votes?universeIds=${data.universeId}`, {
            method: 'GET'
          })
        
        const placeinfo = await PlaceInfo.json()
        const votesinfo = await VotesInfo.json()

        return NextResponse.json({place: placeinfo.data[0], votes: votesinfo.data[0] }, {status: 200})
    } catch (err) {
        return NextResponse.json({ error: err }, {status: 500})
    }

    
}