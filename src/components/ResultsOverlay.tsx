import { useRef, useEffect, useState } from 'react';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) { // pass native coords and draws onto equivalent canvas resolution
    const [scale, setScale] = useState(2);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    //const canvasResolutionX = 1920;
    //const canvasResolutionY = 1080;
    const canvasResolutionX = 3840;
    const canvasResolutionY = 2160;

    const adjustedX: number = (canvasResolutionX / 2) - (coordinates.x) * (canvasResolutionX / imageResolutionX);
    const adjustedY: number = (canvasResolutionY / 2) - (coordinates.y) * (canvasResolutionY / imageResolutionY);

    const offSetX = coordinates.x - imageResolutionX / 2;
    const offSetY = coordinates.y - imageResolutionY / 2;

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = (coordinates.x * (canvasResolutionX / imageResolutionX));
        const y = (coordinates.y * (canvasResolutionY / imageResolutionY));

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

        ctx.imageSmoothingEnabled = true;
        ctx.lineCap = "round";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startCoord.x * canvasResolutionX / imageResolutionX, startCoord.y * canvasResolutionY / imageResolutionY);
        ctx.lineTo(endCoord.x * canvasResolutionX / imageResolutionX, endCoord.y * canvasResolutionY / imageResolutionY);
        ctx.strokeStyle = "white";
        ctx.stroke();
    };

    const adjustCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

    };

    useEffect(() => {
        //adjustCanvas();
        const clickedX = imageResolutionX / 2 - offSetX;
        const clickedY = imageResolutionY / 2 - offSetY;

        drawRectangle({ x: 1280, y: 720 });

        console.log("offSetX: %s, offSetY: %s", offSetX, offSetY);
        console.log("X: %s, Y: %s", coordinates.x, coordinates.y);
        console.log("adjustedX: %s, adjustedY: %s", adjustedX * 2, adjustedY * 2);

        setTimeout(() => {
            drawRectangle({ x: imageResolutionX / 2 - offSetX, y: imageResolutionY / 2 - offSetY });
            drawLine({ x: clickedX, y: clickedY }, { x: 1280, y: 720 });
        }, 2000)

        return () => {
        };
    }, []);

    return (
        <div style={{}}>
            <canvas
                ref={canvasRef}
                width={canvasResolutionX}
                height={canvasResolutionY}
                //className="border border-slate-600"
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    animation: `resultsPan 2000ms ease forwards`,
                }}
            />
            <style jsx>{`
                @keyframes resultsPan {
                    0% {
                        transform: translate(-960px, -540px);
                    }
                    25% {
                        transform: translate(-960px, -540px);
                    }
                    100% {
                        transform: translate(${-960 - adjustedX}px, ${-540 - adjustedY}px);
                    }
                }
            `}</style>
        </div>
    )
}

export default ResultsOverlay;
