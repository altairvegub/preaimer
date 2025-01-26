import Image from 'next/image'
import { MouseEventHandler, useEffect } from 'react';
import ResultsOverlay from './ResultsOverlay';

interface GameResultProps {
    coordinates: Coordinates
    onClick: MouseEventHandler<HTMLElement>;
}

function GameResult({ coordinates, onClick }: GameResultProps) {

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
                            //transformOrigin: `${2 * (coordinates.x * (1920 / 2560))}px ${2 * (coordinates.y * (1080 / 1440))}px`,
                            animation: `reversePanTransformOrigin 2000ms ease forwards`,
                            position: 'relative',
                            left: 0,
                            top: 0,
                        }}
                    />
                    <style jsx>{`
        @keyframes reversePanTransformOrigin {
            0% {
                transform: translate(${2 * (960 - (coordinates.x) * 1920 / 2560)}px, ${2 * (540 - (coordinates.y) * 1080 / 1440)}px) scale(2);
            }
            25% {
                transform: translate(${2 * (960 - (coordinates.x) * 1920 / 2560)}px, ${2 * (540 - (coordinates.y) * 1080 / 1440)}px) scale(2);
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
