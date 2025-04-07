import CanvasDrawing from "./CanvasDrawing";
import Game from "./Game";
import type { MouseEventHandler } from 'react';

interface GameGraphicsProps {
    width?: number;
    height?: number;
    onClick: MouseEventHandler<HTMLElement>;
}

function GameGraphics({ width, height, onClick }: GameGraphicsProps) {

    return (
        <>
            <div className='m-auto'>
                <div className="overflow-hidden w-[2560px] h-[1440px]">
                    <CanvasDrawing width={width} height={height} onClick={onClick} />
                    <Game />
                </div>
            </div>
        </>
    );
}

export default GameGraphics;
