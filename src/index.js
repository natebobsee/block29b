export async function fetchAllPlayers () {
try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players')
    const result = await response.json();
    return result.data.players;
} catch (error) {
    console.log(error)
}
   
}