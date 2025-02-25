type Coordinates = {
    x: number;
    y: number;
}

type GameInfo = {

}

type GameStatus = 'idle' | 'playing' | 'showResult' | 'gameOver';

interface GameState {
    gameStatus: GameStatus,
    score: number,
    scenario: number,
    scenarios: string[],
    scenarioId: number,
    coordinates: Coordinates,
    updateNextStatus: () => void,
    updateStatus: (status: GameStatus) => void,
    updateScore: (score: number) => void,
    updateScenario: () => void,
    updateCoordinates: (coordinates: Coordinates) => void,
    resetScenario: () => void,
}
