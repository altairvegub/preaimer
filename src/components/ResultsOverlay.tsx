import { useRef, useEffect, useState } from 'react';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) { // pass native coords and draws onto equivalent canvas resolution
    const [scale, setScale] = useState(2);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    const canvasResolutionX = 1920;
    const canvasResolutionY = 1080;

    const adjustedX: number = (canvasResolutionX / 2) - (coordinates.x) * (canvasResolutionX / imageResolutionX);
    const adjustedY: number = (canvasResolutionY / 2) - (coordinates.y) * (canvasResolutionY / imageResolutionY);

    const offSetX = coordinates.x - imageResolutionX / 2;
    const offSetY = coordinates.y - imageResolutionY / 2;

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = (coordinates.x * (1920 / 2560));
        const y = (coordinates.y * (1080 / 1440));

        let rectangleSize = 5;
        let color = '#FFFFFF'


        //stroke
        ctx.imageSmoothingEnabled = true;
        ctx.fillStyle = "#000000";
        ctx.fillRect(
            x - ((rectangleSize + 2) / 2),
            y - ((rectangleSize + 2) / 2),
            rectangleSize + 2,
            rectangleSize + 2,
        );

        ctx.fillStyle = color;
        ctx.fillRect(
            x - (rectangleSize / 2),
            y - (rectangleSize / 2),
            rectangleSize,
            rectangleSize
        );
    };

    const drawLine = (startCoord: Coordinates, endCoord: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;



        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startCoord.x * 1920 / 2560, startCoord.y * 1080 / 1440);
        ctx.lineTo(endCoord.x * 1920 / 2560, endCoord.y * 1080 / 1440);
        ctx.strokeStyle = "white";
        ctx.stroke();
    };

    useEffect(() => {
        const clickedX = 1280 - offSetX * scale;
        const clickedY = 720 - offSetY * scale;

        drawRectangle({ x: 1280, y: 720 });

        console.log("offSetX: %s, offSetY: %s", offSetX, offSetY);
        console.log("X: %s, Y: %s", coordinates.x, coordinates.y);
        console.log("adjustedX: %s, adjustedY: %s", adjustedX * 2, adjustedY * 2);

        setTimeout(() => {
            drawRectangle({ x: 1280 - offSetX * scale, y: 720 - offSetY * scale });
            drawLine({ x: clickedX, y: clickedY }, { x: 1280, y: 720 });
        }, 2000)

        return () => {
        };
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={1920}
                height={1080}
                className="border border-slate-600"
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    animation: `resultsPan 2000ms ease forwards`,
                }}
            />
            <style jsx>{`
                @keyframes resultsPan {
                    0% {
                        transform: translate(0px, 0px);
                    }
                    25% {
                        transform: translate(0px, 0px);
                    }
                    100% {
                        transform: translate(${-adjustedX * 2}px, ${-adjustedY * 2}px);
                    }
                }
            `}</style>
        </div>
    )
}

export default ResultsOverlay;
