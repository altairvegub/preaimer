'use client'
import { useState, useEffect } from 'react';

export default function CursorTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
    const [imgPos, setImgPos] = useState({ xLeft: 0, xRight: 0, yTop: 0, yBottom: 0 })
    const targetPos = { x: 960, y: 543 };

    var myImg = document.getElementById("myImgId");

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
        document.addEventListener('mouseup', getImageCoords);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', getImageCoords);
        };
    }, []);

    return (
        <div id='tracker'>
            <p>Cursor position: {`X: ${position.x}, Y: ${position.y}`}<br />
                Clicked position: {`X: ${clickPos.x}, Y: ${clickPos.y}`}<br />
                top-left corner pos: {`x left: ${imgPos.xLeft}, y top: ${imgPos.yTop}`}<br />
                bottom-right corner pos: {`x right: ${imgPos.xRight}, y bottom: ${imgPos.yBottom}`}
            </p>
        </div>
    );
}
