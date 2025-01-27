import Image from 'next/image'
import { MouseEventHandler, useEffect } from 'react';
import ResultsOverlay from './ResultsOverlay';

interface GameResultProps {
    coordinates: Coordinates
    onClick: MouseEventHandler<HTMLElement>;
}

function GameResult({ coordinates, onClick }: GameResultProps) {
    const scale = 2;
    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    const canvasResolutionX = 3840;
    const canvasResolutionY = 2160;

    const adjustedX = (canvasResolutionX / 2) - (coordinates.x) * (canvasResolutionX / imageResolutionX);
    const adjustedY = (canvasResolutionY / 2) - (coordinates.y) * (canvasResolutionY / imageResolutionY);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
                <div style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'visible',
                }}>
                    <ResultsOverlay coordinates={coordinates} />
                    <Image
                        //src="/screenshots/4k_range.jpg"
                        src="/screenshots/ascent_1_peek.png"
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
