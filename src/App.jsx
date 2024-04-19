import { useState, useEffect } from 'react'
import AllPlayers from './AllPlayers.jsx'
import './App.css'

function App() {
  let id= [];
  let newPlayer = [];
  let players = [];
  let searchid = [];
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);
 
  function search () {
players = contacts.filter((contact) => {contact.name.includes(searchid.char)
console.log(players);
})
  }
  const removePlayer = async (playerId) => {
    
    try {
        //console.log(playerId);
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id.delete}`, {
            method: 'delete'
        });
        console.log(id.delete);
    
        if(response.status === 204) {
            return true;
        }
    
        throw new Error(` ${id}`);
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

  async function handleClick () {

  }
  async function handleSubmitt(event) {
  
    console.log("Hello ");
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players", {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          name: newPlayer.name, 
          breed: newPlayer.breed 
        }) 
      });
      console.log(newPlayer)
      const result = await response.json();
    } catch (error) {
      
      setError(error.message);
    }
  }
  async function data(){
  useEffect(() => {
  async function readobject () {
  
    try{
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
    
    const json = await response.json();
  
    if(!json.success) {
      setError(json.message);
    }
    //S console.log(json.data.players);
    console.log(json.data);
    setContacts(json.data.players);
    console.log(contacts); 
  }
  catch{

  }
  }
  readobject();
  },[]);}

data();
  return (
    <>

  <form onSubmit={handleSubmitt}>
  <label>
    name: <input className='submit'  value={newPlayer.name} onChange={(e) => newPlayer.name = e.target.value} />
  </label>
  <div>
  <label>
    breed: <input className='submit' value={newPlayer.breed} onChange={(e) => newPlayer.breed = e.target.value} />
  </label>
  </div>
  <div>
  <button>add player</button>
 </div>
 
 </form>
 <form onSubmit={removePlayer}>
 <div>
  <label>
    Delete id <input className='submit' value={id.delete} onChange={(e) => id.delete = e.target.value} />
  
  </label>
  </div>
  {/* {console.log(id.delete)} */}
<button>delete player</button>
</form>
<form onSubmit={search()}>
 <div>
  <label>
    search id <input className='submit' value={searchid.char} onChange={(e) => searchid.char = e.target.value} />
  </label>
  </div>
  
<button>search player</button>
{/* <button onClick={removePlayer(id)}>deletePlayer</button>   */}
</form>
<div>
  <h3>Players</h3>

{/* <AllPlayers/> */}
 {/* {console.log(contacts)} */}
   {contacts.map((contact) => {
             return ( <div className='dogs' key ={contact.id}>
                        <h4>id#: {contact.id}</h4>
                        <p>name: {contact.name}</p>
                        <p>breed: {contact.breed}</p>
                    </div> )
        })}
</div>
    </>
  )
}

export default App
