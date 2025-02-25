import Button from "./Button";
import { useGameStore } from "./GameController";

function GameFinish() {
    const updateState = useGameStore(state => state.updateStatus);
    const resetScenarioNum = useGameStore(state => state.resetScenario);

    function onPlayAgainClick() {
        resetScenarioNum();
        updateState("playing")

    }
    return (
        <Button colour="blue" label="Play Again" clickHandler={onPlayAgainClick} />
    )
}

export default GameFinish;
