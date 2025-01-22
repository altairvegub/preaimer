type GameHeaderProps = {
    score: number;
    scenario: number;
    status: GameStatus;
    changeGameStatus: any;
}

const gameStatusTransitions: Record<GameStatus, GameStatus> = {
    idle: 'playing',
    playing: 'showResult',
    showResult: 'gameOver',
    gameOver: 'idle'
};

function GameHeader({ score, scenario, status, changeGameStatus }: GameHeaderProps) {

    return (
        <div className="flex justify-between items-center mb-4 p-4 text-white bg-midnight rounded">
            <div className="flex gap-4">
                <div>Score: {score}</div>
                <div>Scenario: {scenario}</div>
            </div>
            {status === 'idle' ? (
                <button
                    className="w-72 px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => changeGameStatus(gameStatusTransitions[status])}
                    style={{
                        zIndex: 1,
                        position: 'fixed',
                        bottom: '10rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    Start Game
                </button>
            ) :
                (
                    <button
                        className="w-72 px-5 py-3 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => changeGameStatus(gameStatusTransitions[status])}
                        style={{
                            zIndex: 1,
                            position: 'fixed',
                            bottom: '10rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        FIRE
                    </button>
                )
            }
        </div>
    );
}

export default GameHeader;
