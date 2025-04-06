import { useGameStore } from "./GameController";


function Score() {
    const coordinates = useGameStore(state => state.coordinates)
    const currScore = useGameStore(state => state.currScore);
    const currDistance = useGameStore(state => state.currDistance);

    return (
        <div className='p-2 z-10 fixed flex flex-col justify-center items-center'
            style={{
                bottom: '15rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                width: '16rem',
            }}>
            <span className='text-4xl'>{currScore}</span>
            <span className="text-2xl text-slate-400"> pixels {coordinates.y < currScore ? "high" : "low"}</span>
            <span className="text-slate-400 text-lg" ><span className=''>{currDistance}</span> px from target</span>
        </div>
    );
}

export default Score;
