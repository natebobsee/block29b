import {useState, useEffect} from 'react'
import {fetchAllPlayers} from './index.js'
import PlayerCard from './PlayerCard.jsx'

export default function AllPlayers() {
const [players, setPlayers] = useState();

useEffect(()=>{
 async function resultsPlayers(){
 try {
    const result=await fetchAllPlayers();
    setPlayers(result);
 } catch (error) {
    console.log(error)
 }
   
 }
 resultsPlayers();
 
}, [])
   console.log(players)
return(
    <>
   { players.map((player)=>{
        return <PlayerCard key={player.id} player={player}/>
    })}
    </>
)
}
