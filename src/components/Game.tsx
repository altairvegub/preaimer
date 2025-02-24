import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useGameStore } from './GameController';

function Game() {
    const gameImgRef = useRef<HTMLImageElement>(null);
    //const playScenarioPath = `/screenshots/ascent_2.png`;
    const scenarios = useGameStore(state => state.scenarios)
    const scenarioNum = useGameStore(state => state.scenario)
    let playScenarioPath = '';

    if (scenarioNum > 0 && scenarioNum <= scenarios.length) {
        playScenarioPath = `/screenshots/${scenarios[scenarioNum - 1]}.png`;
    }

    useEffect(() => {
        if (gameImgRef.current) {
            const element = gameImgRef.current;
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.scrollY;
            const middle = absoluteElementTop + (elementRect.height / 2) - (window.innerHeight / 2);

            window.scrollTo(0, middle);
        }
    }, [])

    return (
        <>
            <div ref={gameImgRef} style={{ width: 2560, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <Image id="myImgId" className="select-none" src={playScenarioPath} alt="angle" width='2560' height='1440' fill={false} style={{}} />
            </div>
        </>
    );
}

export default Game;
