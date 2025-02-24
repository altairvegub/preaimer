'use client'
import { useGameStore } from './GameController'
import Button from './Button'

function GameUserInterface() {
    const outOfBoundsCoords = { x: -5, y: -5 };
    const score = useGameStore(state => state.score);
    const scenario = useGameStore(state => state.scenario);
    const gameStatus: GameStatus = useGameStore(state => state.gameStatus);
    const updateStatus = useGameStore(state => state.updateNextStatus);
    const updateScenario = useGameStore(state => state.updateScenario);
    const updateCoordinates = useGameStore(state => state.updateCoordinates);

    function onFireClick() {
        updateStatus();

        if (gameStatus === 'showResult') {
            updateScenario();
            updateCoordinates(outOfBoundsCoords);
        }
    }

    return (
        <div className="flex justify-between items-center mb-4 p-4 text-white bg-midnight rounded">
            <div className="flex gap-4">
                <div>Score: {score}</div>
                <div>Scenario: {scenario}</div>
            </div>
            {(gameStatus === 'idle' || gameStatus === 'gameOver') && <Button colour='blue' label='Play Game' clickHandler={onFireClick} />}
            {gameStatus === 'playing' && <Button colour='red' label='FIRE' clickHandler={onFireClick} />}
            {gameStatus === 'showResult' && <Button colour='grey' label='CONTINUE' clickHandler={onFireClick} />}
        </div>
    );
}

export default GameUserInterface;
