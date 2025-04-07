import { useState } from "react";
import { useGameStore } from "./GameController";
import Image from "next/image";

function GamePlayOverlay() {
    const [toggleMap, setToggleMap] = useState(false)
    const scenarios = useGameStore(state => state.scenarios);
    const scenarioNum = useGameStore(state => state.scenario);

    const r2Url = `https://${process.env.NEXT_PUBLIC_CDN_DOMAIN}/`;
    const mapScenarioPath = `${r2Url + scenarios[scenarioNum - 1]}_map.jpg`;

    function onButtonClick() {
        setToggleMap(!toggleMap);
    }

    return (
        <>
            <div className='w-56 p-3 z-10 left-14 fixed flex flex-col justify-center items-center gap-1 bg-black/65 rounded-xl'>
                <span className='text-lg text-slate-300 tracking-tight'> Scenario </span>
                <span className='text-3xl tracking-wider'>{scenarioNum}/{3}</span>
                <button
                    className='w-48 py-2 rounded-lg font-semibold text-l text-white bg-slate-500'
                    onClick={onButtonClick}
                >
                    View target on map
                </button>
            </div >
            {toggleMap &&
                <div className='shadow-[0.25rem_0.25rem_0_0_theme(colors.secondary)] border border-[theme(colors.secondary)] z-20 rounded-xl w-[1000px] h-[1000px] fixed left-1/2  -translate-x-1/2 overflow-hidden' onClick={onButtonClick}>
                    <Image id="gameImageId" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={mapScenarioPath} alt="map" width='2000' height='1000' style={{ width: "1920px", height: "1080px", objectFit: 'none' }} />
                </div>
            }
        </>
    )
}

export default GamePlayOverlay;
