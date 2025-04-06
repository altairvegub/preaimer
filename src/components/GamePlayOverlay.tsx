import { useState } from "react";
import { useGameStore } from "./GameController";
import Image from "next/image";

function GamePlayOverlay() {
    const [toggleMap, setToggleMap] = useState(false)
    const numScenario = useGameStore(state => state.scenario)
    const r2Url = `https://${process.env.NEXT_PUBLIC_CDN_DOMAIN}/`;
    const mapPath = r2Url + 'ascent_1' + '_map.jpg';

    function onButtonClick() {
        setToggleMap(!toggleMap);
    }

    return (
        <>
            <div className='w-56 p-3 z-10 left-14 fixed flex flex-col justify-center items-center gap-1 bg-black/65 rounded-xl'>
                <span className='text-lg text-slate-300 tracking-tight'> Scenario </span>
                <span className='text-3xl tracking-wider'>{numScenario}/{3}</span>
                <button
                    className='w-48 py-2 rounded-lg font-semibold text-l text-white bg-slate-500'
                    onClick={onButtonClick}
                >
                    View target on map
                </button>
            </div >
            <div className='w-[1400px] h-[1400px] fixed overflow-hidden left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2'>
                <div className='justify-center items-center min-w-full min-h-full object-cover'>
                    {toggleMap &&
                        <Image id="gameImageId" className="select-none relative" src={mapPath} alt="map" width='2560' height='1440' style={{}} />
                    }
                </div>
            </div>
        </>
    )
}

export default GamePlayOverlay;
