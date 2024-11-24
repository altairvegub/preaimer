export default function GameHeader({ score, scenario, isPlaying, onStart }) {

    return (
        <div className="flex justify-between items-center mb-4 p-4 text-white bg-midnight rounded">
            <div className="flex gap-4">
                <div>Score: {score}</div>
                <div>Scenario: {scenario}</div>
            </div>
            {!isPlaying ? (
                <button
                    onClick={onStart}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Start Game
                </button>
            ) :
                (
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        FIRE
                    </button>
                )
            }
        </div>
    );
}
