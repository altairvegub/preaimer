'use client'
import { useState, useEffect } from 'react';
import Game from './Game';

type Coordinate = {
    x: number;
    y: number;
}

type ImageCoord = {
    xLeft: number;
    xRight: number;
    yTop: number;
    yBottom: number;
}

export default function CursorTracker() {
    const [position, setPosition] = useState<Coordinate>({ x: 0, y: 0 });
    const [clickPos, setClickPos] = useState<Coordinate>({ x: 0, y: 0 });
    const [imgPos, setImgPos] = useState<ImageCoord>({ xLeft: 0, xRight: 0, yTop: 0, yBottom: 0 })
    //const targetPos = { x: 1212, y: 686 };

    const handleMouseMove = (event: any) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const getImageCoords = (event: any) => {
        const imageRect = event.target.getBoundingClientRect();
        setImgPos({
            xLeft: imageRect.left,
            xRight: imageRect.right,
            yTop: imageRect.top,
            yBottom: imageRect.bottom,
        })
        setClickPos({
            x: event.clientX - imageRect.left,
            y: event.clientY - imageRect.top,
        })
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', getImageCoords);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', getImageCoords);
        };
    }, []);

    return (
        <>
            <Game x={clickPos.x} y={clickPos.y} />
            <div id='tracker'>
                <p>Cursor position: {`X: ${position.x}, Y: ${position.y}`}<br />
                    Clicked position: {`X: ${clickPos.x}, Y: ${clickPos.y}`}<br />
                    top-left corner pos: {`x left: ${imgPos.xLeft}, y top: ${imgPos.yTop}`}<br />
                    bottom-right corner pos: {`x right: ${imgPos.xRight}, y bottom: ${imgPos.yBottom}`}
                </p>
            </div>
        </>
    );
}
