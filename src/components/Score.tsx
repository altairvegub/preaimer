import { useGameStore } from "./GameController";

function calculateScore(coordinates: Coordinates) {
    const midX = 1280;
    const midY = 720;

    const x = coordinates.x;
    const y = coordinates.y;

    const score = Math.floor(Math.sqrt(Math.pow((x - midX), 2) + Math.pow((y - midY), 2))) //distance formula of click to mid-point (target)

    return score;
}

function Score() {
    const coordinates = useGameStore(state => state.coordinates)
    const score = calculateScore(coordinates);
    const midY = 720;
    const height = Math.abs(720 - coordinates.y);

    return (
        <div className='text-3xl p-2'
            style={{
                zIndex: 2,
                position: 'fixed',
                bottom: '15rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                width: '16rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <span className='text-4xl'>{height}</span>
            <span className="text-2xl text-slate-400"> pixels {coordinates.y < midY ? "high" : "low"}</span>
            <span className="text-slate-400 text-lg" ><span className=''>{score}</span> px from target</span>
        </div>
    );
}

export default Score;
