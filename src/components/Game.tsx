import Image from 'next/image'
import { useEffect, useRef } from 'react';

interface GameProps {
    x: number;
    y: number;
}

function Game({ x, y }: GameProps) {
    const gameImgRef = useRef<HTMLImageElement>(null);

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
            <div ref={gameImgRef}>
                <Image id="myImgId" className="select-none" src={`/screenshots/4k_range.jpg`} alt="angle" width='2560' height='1440' fill={false} style={{ objectFit: "cover" }} />
            </div>
        </>
    );
}

export default Game;
