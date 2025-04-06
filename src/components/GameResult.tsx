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

    window.scrollTo(0, 0);

    return (
        <>
            <div className='rounded-xl' style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
                <div className='justify-center items-center overflow-visible object-contain'>
                    <ResultsOverlay coordinates={coordinates} />
                    <Image
                        src={resultScenarioPath}
                        alt="Cropped image"
                        width={2560}
                        height={1440}
                        style={{
                            width: '1920px',
                            height: '1080px',
                            backgroundPosition: 'center',
                            animation: `reversePanTransformOrigin 1500ms ease forwards`,
                            position: 'relative',
                            left: 0,
                            top: 0,
                        }}
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
