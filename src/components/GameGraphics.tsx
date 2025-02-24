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
            <CanvasDrawing width={width} height={height} onClick={onClick} />
            <Game />
        </>
    );
}

export default GameGraphics;
