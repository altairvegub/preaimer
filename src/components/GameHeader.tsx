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

export default function GameHeader({ score, scenario, status, changeGameStatus }: GameHeaderProps) {

    return (
        <div className="flex justify-between items-center mb-4 p-4 text-white bg-midnight rounded">
            <div className="flex gap-4">
                <div>Score: {score}</div>
                <div>Scenario: {scenario}</div>
            </div>
            {status === 'idle' ? (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => changeGameStatus(gameStatusTransitions[status])}
                >
                    Start Game
                </button>
            ) :
                (
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => changeGameStatus(gameStatusTransitions[status])}
                    >
                        FIRE
                    </button>
                )
            }
        </div>
    );
}
