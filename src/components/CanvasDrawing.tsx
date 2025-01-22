import { useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';

interface CanvasProps {
    width?: number;
    height?: number;
    onClick: MouseEventHandler<HTMLElement>;
    coordinates: Coordinates;
}

function CanvasDrawing({ width, height, onClick, coordinates }: CanvasProps) {
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

    useEffect(() => {
        drawRectangle(coordinates);

        return () => {
        };
    }, [coordinates]);

    return (
        <>
            <div>
                <canvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    onClick={onClick}
                    className="border border-slate-800"
                    style={{
                        position: 'absolute',
                        cursor: 'crosshair',
                    }}
                />
            </div>
        </>
    );
};

export default CanvasDrawing;
