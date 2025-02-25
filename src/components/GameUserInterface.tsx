'use client'
import { useGameStore } from './GameController'
import Button, { ColourKey } from './Button'
import Score from './Score';

function GameUserInterface() {
    const outOfBoundsCoords = { x: -5, y: -5 };
    const score = useGameStore(state => state.score);
    const scenario = useGameStore(state => state.scenario);
    const gameStatus: GameStatus = useGameStore(state => state.gameStatus);
    const coordinates = useGameStore(state => state.coordinates);
    const updateNextStatus = useGameStore(state => state.updateNextStatus);
    const updateScenario = useGameStore(state => state.updateScenario);
    const updateCoordinates = useGameStore(state => state.updateCoordinates);

    function onButtonClick() {
        if ((coordinates.x < 0 || coordinates.y < 0) && gameStatus !== 'idle') {
            return;
        }
        updateNextStatus();

        if (gameStatus === 'showResult') {
            updateScenario();
            updateCoordinates(outOfBoundsCoords);
        }

    }

    let fireBtnColour: ColourKey;

    if (coordinates.x < 0 || coordinates.y < 0) {
        fireBtnColour = 'disabled'
    } else {
        fireBtnColour = 'red'
    }

    return (
        <div className="flex justify-between items-center mb-4 p-4 text-white bg-midnight rounded">
            <div className="flex gap-4">
                <div>Score: {score}</div>
                <div>Scenario: {scenario}</div>
            </div>
            {(gameStatus === 'idle') && <Button colour='green' label='Play Game' clickHandler={onButtonClick} />}
            {gameStatus === 'playing' && <Button colour={fireBtnColour} label='FIRE' clickHandler={onButtonClick} />}
            {gameStatus === 'showResult' &&
                <>
                    <div>
                        <Score />
                    </div>
                    <Button colour='green' label='CONTINUE' clickHandler={onButtonClick} />
                </>
            }
        </div>
    );
}

export default GameUserInterface;
