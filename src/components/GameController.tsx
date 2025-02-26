'use client'

import React, { useCallback } from 'react';
import type { MouseEvent } from 'react';
import GameGraphics from './GameGraphics';
import GameResult from './GameResult';
import { create } from 'zustand'
import GameUserInterface from './GameUserInterface';
import GameFinish from './GameFinish';

const DebugPanel = ({ coordinates, gameState }: { coordinates: Coordinates, gameState: GameState }) => (
    <div className="mt-4 p-4 text-white bg-midnight rounded text-sm">
        <h3 className="font-bold mb-2">Debug Info</h3>
        <div>Coordinates: ({Math.round(coordinates.x)}, {Math.round(coordinates.y)})</div>
        <div>Game State: {JSON.stringify(gameState, null, 2)}</div>
    </div>
);

const gameStatusTransitions: Record<GameStatus, GameStatus> = {
    idle: 'playing',
    playing: 'showResult',
    showResult: 'playing', // result to next playing screen flow
    //showResult: 'gameOver', // result screen to gameover screen flow
    gameOver: 'idle'
};

// hard coded values, these will be retrieved from external backend
const scenarioIds: number[] = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const scenarios: string[] = ["ascent_1", "ascent_2", "ascent_3", "ascent_4", "ascent_5", "ascent_6", "ascent_7", "ascent_8", "ascent_9", "ascent_10"];
const scenarioMap: Record<number, string> = {};

for (let i = 0; i < scenarioIds.length; i++) {
    scenarioMap[scenarioIds[i]] = scenarios[i];
}

const outOfBoundsCoords = { x: -5, y: -5 };

export const useGameStore = create<GameState>()((set) => ({
    gameStatus: 'idle',
    score: 0,
    scenario: 1,
    scenarios: scenarios,
    scenarioId: scenarioIds[0],
    coordinates: outOfBoundsCoords,
    updateNextStatus: () => set((state) => ({ gameStatus: gameStatusTransitions[state.gameStatus] })),
    updateStatus: (newStatus) => set({ gameStatus: newStatus }),
    updateScore: (newScore: number) => set((state) => ({ score: state.score + newScore })),
    updateScenario: () => set((state) => ({ scenario: state.scenario + 1 })),
    updateCoordinates: (newCoordinates: Coordinates) => set({ coordinates: { x: newCoordinates.x, y: newCoordinates.y } }),
    resetScenario: () => set(() => ({ scenario: 1 })),
}))

function GameController() {
    const coordinates = useGameStore(state => state.coordinates);
    const updateCoordinates = useGameStore(state => state.updateCoordinates);

    function handleGameClick(e: MouseEvent): Coordinates {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const newCoordinates: Coordinates = { x: x, y: y };

        updateCoordinates({ x: x, y: y });

        return newCoordinates;
    };

    const gameStatus = useGameStore((state: GameState) => state.gameStatus);
    const gameState = useGameStore();

    return (
        <>
            <GameUserInterface />
            {gameStatus === 'playing' &&
                <GameGraphics width={2560} height={1440} onClick={handleGameClick} />
            }
            {gameStatus === 'showResult' &&
                <div className="flex justify-center">
                    <GameResult />
                </div>
            }
            {gameStatus === 'gameOver' && <GameFinish />}
            <DebugPanel coordinates={coordinates} gameState={gameState} />
        </>
    )
}

export default GameController;
