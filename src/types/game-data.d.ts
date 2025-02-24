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
    updateScore: (score: number) => void,
    updateNextStatus: () => void,
    updateScenario: () => void,
    updateCoordinates: (coordinates: Coordinates) => void,
}
