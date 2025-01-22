import React, { useState, useCallback, useEffect } from 'react';
import type { MouseEvent } from 'react';
import GameHeader from './GameHeader';
import GameGraphics from './GameGraphics';
import GameResult from './GameResult';

type GameState = {
    status: GameStatus,
    score: number,
    scenario: number
}

const gameStatusTransitions: Record<GameStatus, GameStatus> = {
    idle: 'playing',
    playing: 'showResult',
    showResult: 'gameOver',
    gameOver: 'idle'
};

const DebugPanel = ({ coordinates, gameState }: { coordinates: Coordinates, gameState: GameState }) => (
    <div className="mt-4 p-4 text-white bg-midnight rounded text-sm">
        <h3 className="font-bold mb-2">Debug Info</h3>
        <div>Coordinates: ({Math.round(coordinates.x)}, {Math.round(coordinates.y)})</div>
        <div>Game State: {JSON.stringify(gameState, null, 2)}</div>
    </div>
);

function GameController() {
    const [gameState, setGameState] = useState<GameState>({
        status: "idle",
        score: 0,
        scenario: 1
    });

    const handleState = (gameStatus: GameStatus) => {
        setGameState(prev => ({ ...prev, status: gameStatus }))
    }

    const [coordinates, setCoordinates] = useState<Coordinates>({ x: -5, y: -5 }); // hide rectangle outside of canvas on initial render

    const handleGameClick = useCallback((e: MouseEvent) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        setCoordinates({ x, y });
    }, []);

    const handleSpaceDown = (event: any) => {
        if (event.key === 'Space') {
            event.preventDefault();
            console.log("SPACE");
        }
    }


    //useEffect(() => {
    //    const handleKeyDown = (event: any) => {
    //        if (event.code === "Space") {
    //        }
    //    }

    //    window.addEventListener("keydown", handleKeyDown);

    //    return () => {
    //        window.removeEventListener("keydown", handleKeyDown)
    //    }
    //}, [])

    //const updateScore = useCallback((points: number) => {
    //    setGameState(prev => ({
    //        ...prev,
    //        score: prev.score + points
    //    }));
    //}, []);

    return (
        <>
            <GameHeader
                score={gameState.score}
                scenario={gameState.scenario}
                status={gameState.status}
                changeGameStatus={handleState}
            />
            {gameState.status === 'playing' &&
                <>
                    <GameGraphics width={2540} height={1430} onClick={handleGameClick} coordinates={coordinates} />
                </>
            }
            {gameState.status === 'showResult' &&
                <div className="flex justify-center min-h-screen">
                    <GameResult coordinates={coordinates} onClick={handleGameClick} />
                </div>
            }
            <DebugPanel coordinates={coordinates} gameState={gameState} />
        </>
    )
}

export default GameController;
