import { MouseEvent, useRef } from 'react';

interface CanvasProps {
    width?: number;
    height?: number;
    onClick: Function;
}

function CanvasDrawing({ width, height, onClick }: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = coordinates.x;
        const y = coordinates.y;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let rectangleSize = 5
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

    function onAimClick(event: MouseEvent) {
        const newCoords = onClick(event);
        drawRectangle(newCoords);
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                onClick={onAimClick}
                className="border border-slate-800"
                style={{
                    position: 'absolute',
                    cursor: 'crosshair',
                }}
            />
        </>
    );
};

export default CanvasDrawing;
