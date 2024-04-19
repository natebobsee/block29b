export default function PlayerCard({player}) {
    return (
        <>
        <div>
        <h2>{player.name}</h2>
        {' '}
        {player.breed}
        { ' '}
        {player.id}
        </div>
        </>
    )
}