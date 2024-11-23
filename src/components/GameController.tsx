import React, { useState, useCallback } from 'react';
import type { MouseEvent } from 'react';
import GameHeader from './GameHeader';
import GameGraphics from './GameGraphics';
import CanvasDrawing from './CanvasDrawing';

type GameState = {
    isPlaying: boolean,
    score: number,
    scenario: number
}

type Coordinates = {
    x: number,
    y: number
}

const DebugPanel = ({ coordinates, gameState }: any) => (
    <div className="mt-4 p-4 text-white bg-midnight rounded text-sm">
        <h3 className="font-bold mb-2">Debug Info</h3>
        <div>Coordinates: ({Math.round(coordinates.x)}, {Math.round(coordinates.y)})</div>
        <div>Game State: {JSON.stringify(gameState, null, 2)}</div>
    </div>
);

export default function GameController() {
    const [gameState, setGameState] = useState<GameState>({
        isPlaying: false,
        score: 0,
        scenario: 1
    });

    const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

    const handleGameStart = () => {
        setGameState(prev => ({ ...prev, isPlaying: true }));
    };

    const handleGameClick = useCallback((e: MouseEvent) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        setCoordinates({ x, y });
    }, []);

    const updateScore = useCallback((points: number) => {
        setGameState(prev => ({
            ...prev,
            score: prev.score + points
        }));
    }, []);

    return (
        <>
            <GameHeader
                score={gameState.score}
                scenario={gameState.scenario}
                isPlaying={gameState.isPlaying}
                onStart={handleGameStart}
            />

            <CanvasDrawing width={2540} height={1430} onClick={handleGameClick} />
            <GameGraphics />

            <DebugPanel coordinates={coordinates} gameState={gameState} />
        </>
    )
}
