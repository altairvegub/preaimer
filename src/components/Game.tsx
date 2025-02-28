import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useGameStore } from './GameController';

function getRandomScrollAmount(min: number, max: number) { // adds variation to prevent users from memorizing the center of the screen
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function Game() {
    const gameImgRef = useRef<HTMLImageElement>(null);
    const scenarios = useGameStore(state => state.scenarios);
    const scenarioNum = useGameStore(state => state.scenario);
    const updateStatus = useGameStore(state => state.updateStatus);
    let playScenarioPath = '';
    let mapScenarioPath = '';

    if (scenarioNum > 0 && scenarioNum <= scenarios.length) {
        playScenarioPath = `/screenshots/${scenarios[scenarioNum - 1]}.jpg`;
        mapScenarioPath = `/screenshots/${scenarios[scenarioNum - 1]}_map.jpg`;
    } else {
        updateStatus('gameOver');
    }

    useEffect(() => {
        if (gameImgRef.current) {
            const element = gameImgRef.current;
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.scrollY;
            const middle = absoluteElementTop + (elementRect.height / 2) - (window.innerHeight / 2);
            const scrollTarget = middle + getRandomScrollAmount(-30, 30);

            window.scrollTo(0, scrollTarget);
        }
    }, [])

    return (
        <>
            <div ref={gameImgRef} style={{ width: 2560, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <Image id="gameImageId" className="select-none" src={playScenarioPath} alt="angle" width='2560' height='1440' fill={false} style={{}} />
            </div>
        </>
    );
}

export default Game;
