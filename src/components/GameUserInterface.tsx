import { useGameStore } from './GameController'
import Button, { ColourKey } from './Button'
import Score from './Score';
import GamePlayOverlay from './GamePlayOverlay';

function GameUserInterface() {
    const outOfBoundsCoords = { x: -5, y: -5 };
    const scenario = useGameStore(state => state.scenario);
    const gameStatus: GameStatus = useGameStore(state => state.gameStatus);
    const coordinates = useGameStore(state => state.coordinates);
    const updateNextStatus = useGameStore(state => state.updateNextStatus);
    const updateStatus = useGameStore(state => state.updateStatus);
    const updateScenario = useGameStore(state => state.updateScenario);
    const updateCoordinates = useGameStore(state => state.updateCoordinates);
    const numScenarios = 3;

    function onButtonClick() {
        if ((coordinates.x < 0 || coordinates.y < 0) && gameStatus !== 'idle') {
            return;
        }

        // result screen into next scenario or game over screen
        if (gameStatus === 'showResult' && scenario >= numScenarios) {
            updateStatus('gameOver');
            return;
        } else {
            updateNextStatus();
        }

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
            {(gameStatus === 'idle') && <Button colour='green' label='Play Game' clickHandler={onButtonClick} />}
            {gameStatus === 'playing' &&
                <>
                    <div>
                        <GamePlayOverlay />
                    </div>
                    <div className='flex justify-center w-full'>
                        <Button colour={fireBtnColour} label='FIRE' clickHandler={onButtonClick} />
                    </div>
                </>
            }
            {gameStatus === 'showResult' &&
                <>
                    <div>
                        <Score />
                    </div>
                    <div className='flex justify-center w-full'>
                        <Button colour='green' label='CONTINUE' clickHandler={onButtonClick} />
                    </div>
                </>
            }
        </div >
    );
}

export default GameUserInterface;
