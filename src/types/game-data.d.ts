type Coordinates = {
    x: number;
    y: number;
}

type GameInfo = {

}

type GameStatus = 'idle' | 'playing' | 'showResult' | 'gameOver';

interface GameState {
    username: string,
    gameStatus: GameStatus,
    currScore: number,
    currDistance: number,
    totalScore: number,
    scenario: number,
    scenarios: string[],
    scenarioId: number,
    coordinates: Coordinates,
    updateUsername: (username: string) => void,
    updateNextStatus: () => void,
    updateStatus: (status: GameStatus) => void,
    updateCurrScore: (currScore: number) => void,
    updateCurrDistance: (currDistance: number) => void,
    updateTotalScore: (totalScore: number) => void,
    updateScenario: () => void,
    updateCoordinates: (coordinates: Coordinates) => void,
    resetScenario: () => void,
}

interface Score {
    userId: number;
    username: string;
    scenarioId: number;
    xCoordinate: number;
    yCoordinate: number;
    achievedAt: string;
}
