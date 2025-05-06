import Button from "./Button";
import { useGameStore } from "./GameController";
import Leaderboard from "./Leaderboard";
import SubmitScoreScreen from "./SubmitScoreScreen";

function GameFinish() {
    const updateState = useGameStore(state => state.updateStatus);
    const resetScenarioNum = useGameStore(state => state.resetScenario);

    function onPlayAgainClick() {
        resetScenarioNum();
        updateState("playing")

    }
    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <div className='flex flex-row justify-center'>
                    <div className='w-1/2'>
                        <h1 className='text-3xl tracking-tighter text-primary-gray mb-3'> Leaderboard</h1>
                        <Leaderboard size={20} />
                    </div>
                    <Button colour="blue" label="Play Again" clickHandler={onPlayAgainClick} />
                </div>
                <SubmitScoreScreen />
            </div>
        </>
    )
}

export default GameFinish;
