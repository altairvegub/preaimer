import Image from 'next/image'
import { MouseEventHandler, useEffect } from 'react';
import ResultsOverlay from './ResultsOverlay';

interface GameResultProps {
    coordinates: Coordinates
    onClick: MouseEventHandler<HTMLElement>;
}

function GameResult({ coordinates, onClick }: GameResultProps) {
    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    const canvasResolutionX = 1920;
    const canvasResolutionY = 1080;

    const adjustedX = (canvasResolutionX / 2) - (coordinates.x) * (canvasResolutionX / imageResolutionX);
    const adjustedY = (canvasResolutionY / 2) - (coordinates.y) * (canvasResolutionY / imageResolutionY);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/*<span className="text-white">x {coordinates.x} y {coordinates.y}</span>*/}
            <div>
                <ResultsOverlay coordinates={coordinates} />
            </div>
            <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'visible',
                }}>
                    <Image
                        //src="/screenshots/ascent_1_peek.png"
                        src="/screenshots/4k_range.jpg"
                        //src="/screenshots/center.png"
                        alt="Cropped image"
                        width={2560}
                        height={1440}
                        style={{
                            width: '1920px',
                            height: '1080px',
                            backgroundPosition: 'center',
                            animation: `reversePanTransformOrigin 2000ms ease forwards`,
                            position: 'relative',
                            left: 0,
                            top: 0,
                        }}
                    />
                    <style jsx>{`
                        @keyframes reversePanTransformOrigin {
                            0% {
                                transform: scale(2) translate(${adjustedX}px, ${adjustedY}px);
                            }
                            25% {
                                transform: scale(2) translate(${adjustedX}px, ${adjustedY}px);
                            }
                            100% {
                                transform: scale(2) translate(0px, 0px);
                            }
                        }
                    `}</style>
                </div>
            </div >
        </>
    )
}

export default GameResult;
