import CanvasDrawing from "./CanvasDrawing";
import Game from "./Game";
import type { MouseEventHandler } from 'react';

interface GameGraphicsProps {
    width?: number;
    height?: number;
    onClick: MouseEventHandler<HTMLElement>;
    coordinates: Coordinates;
}

function GameGraphics({ width, height, onClick, coordinates }: GameGraphicsProps) {

    return (
        <>
            <CanvasDrawing width={width} height={height} onClick={onClick} coordinates={coordinates} />
            <Game x={coordinates.x} y={coordinates.y} />
        </>
    );
}

export default GameGraphics;
