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
                            transformOrigin: `${coordinates.x * (1920 / 2560)}px ${coordinates.y * (1080 / 1440)}px`,
                            //transformOrigin: 'center center',
                            //animation: `panTransformOrigin 2000ms ease forwards`,
                            transform: 'scale(2.5)',
                            position: 'relative',
                            left: 0,
                            top: 0,
                        }}
                    />
                    <style jsx>{`
                   @keyframes panTransformOrigin {
                     0% {
                       transform-origin: ${coordinates.x * (1920 / 2560)}px ${coordinates.y * (1080 / 1440)}px;
                     }
                     25% {
                       transform-origin: ${coordinates.x * (1920 / 2560)}px ${coordinates.y * (1080 / 1440)}px;
                     }
                     100% {
                       transform-origin: ${960}px ${540}px;
                     }
                   }
                 `}</style>
                </div>
            </div>
        </>
    )
}

export default GameResult;
