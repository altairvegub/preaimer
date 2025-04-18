import Image from 'next/image'
import ResultsOverlay from './ResultsOverlay';
import { useGameStore } from './GameController'

function GameResult() {
    const r2Url = `https://${process.env.NEXT_PUBLIC_CDN_DOMAIN}/`
    const scenarios = useGameStore(state => state.scenarios)
    const scenarioNum = useGameStore(state => state.scenario)
    let resultScenarioPath = '';

    if (scenarioNum > 0 && scenarioNum <= scenarios.length) {
        resultScenarioPath = `${r2Url + scenarios[scenarioNum - 1]}_peek.jpg`;
    }

    const coordinates = useGameStore(state => state.coordinates);
    const transformScale = 2;
    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    const canvasResolutionX = 3840;
    const canvasResolutionY = 2160;

    const adjustedX = (canvasResolutionX / transformScale) - (coordinates.x) * (canvasResolutionX / imageResolutionX);
    const adjustedY = (canvasResolutionY / transformScale) - (coordinates.y) * (canvasResolutionY / imageResolutionY);

    return (
        <>
            <div className='flex rounded-xl'>
                <div className='rounded-xl relative justify-center items-center overflow-hidden w-[1920px] h-[1080px]'>
                    <ResultsOverlay coordinates={coordinates} />
                    <Image
                        src={resultScenarioPath}
                        alt="Cropped image"
                        width={2560}
                        height={1440}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundPosition: 'center',
                            objectPosition: 'center',
                            animation: `reversePanTransformOrigin 1500ms ease forwards`,
                            position: 'relative',
                            left: 0,
                            top: 0,
                        }}
                        priority={true}
                    />
                    <style jsx>{`
                        @keyframes reversePanTransformOrigin {
                            0% {
                                transform: translate(${adjustedX}px, ${adjustedY}px) scale(2);
                            }
                            25% {
                                transform: translate(${adjustedX}px, ${adjustedY}px) scale(2);
                            }
                            100% {
                                transform: translate(0px, 0px) scale(2);
                            }
                        }
                    `}</style>
                </div>
            </div >
        </>
    )
}

export default GameResult;
