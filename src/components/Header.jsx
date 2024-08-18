export default function Header({score, highScore, gameCount}) {

    return (
        <header className='bg-slate-800 text-white p-2 flex justify-between items-center rounded-md  mb-4'>
            <div>
                <h1 className='text-2xl'>Memory Game</h1>
                <p className='text-xs text-left'>Game {gameCount}</p>
            </div>
            <div>
            <p className='text-xs pb-1'>High score: {highScore}</p>
            <p className='bg-slate-100 text-black px-2 rounded-md' >Score: {score}</p>
            </div>
        </header>
    )
}