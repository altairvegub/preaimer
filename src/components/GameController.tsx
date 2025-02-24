'use client'

import React, { useState, useCallback } from 'react';
import type { MouseEvent } from 'react';
import GameGraphics from './GameGraphics';
import GameResult from './GameResult';
import { create } from 'zustand'
import GameUserInterface from './GameUserInterface';

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
const scenarioIds: number[] = [1, 2, 3];
const scenarios: string[] = ["ascent_1", "ascent_2", "ascent_3"];

const scenarioMap: Record<number, string> = {};

for (let i = 0; i < scenarioIds.length; i++) {
    scenarioMap[scenarioIds[i]] = scenarios[i];
}

export const useGameStore = create<GameState>()((set) => ({
    gameStatus: 'idle',
    score: 0,
    scenario: 1,
    scenarios: scenarios,
    scenarioId: scenarioIds[0],
    coordinates: { x: 0, y: 0 },
    updateNextStatus: () => set((state) => ({ gameStatus: gameStatusTransitions[state.gameStatus] })),
    updateScore: (newScore: number) => set({ score: newScore }),
    updateScenario: () => set((state) => ({ scenario: state.scenario + 1 })),
    updateCoordinates: (newCoordinates: Coordinates) => set({ coordinates: { x: newCoordinates.x, y: newCoordinates.y } }),
}))

function GameController() {
    const coordinates = useGameStore(state => state.coordinates);
    const updateCoordinates = useGameStore(state => state.updateCoordinates);

    const handleGameClick = useCallback((e: MouseEvent) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        updateCoordinates({ x: x, y: y });
    }, []);

    const gameStatus = useGameStore((state: GameState) => state.gameStatus);
    const gameState = useGameStore();

    return (
        <>
            <GameUserInterface />
            {gameStatus === 'playing' &&
                <>
                    <GameGraphics width={2560} height={1440} onClick={handleGameClick} />
                </>
            }
            {gameStatus === 'showResult' &&
                <div className="flex justify-center min-h-screen">
                    <GameResult />
                </div>
            }
            <DebugPanel coordinates={coordinates} gameState={gameState} />
        </>
    )
}

export default GameController;
