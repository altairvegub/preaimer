import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';

interface CanvasProps {
    width?: number;
    height?: number;
    rectangleSize?: number;
    color?: string;
}

const CanvasDrawing: React.FC<CanvasProps> = ({
    width = 800,
    height = 600,
    rectangleSize = 10,
    color = 'blue'
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawRectangle = (e: MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //const scaleX = canvas.width / rect.width;
        //const scaleY = canvas.height / rect.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

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
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('click', drawRectangle as unknown as EventListener);

        return () => {
            canvas.removeEventListener('click', drawRectangle as unknown as EventListener);
        };
    }, [color, rectangleSize]);

    return (
        <>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="border border-gray-300"
                onClick={drawRectangle}
                style={{
                    position: 'absolute',
                    cursor: 'crosshair'
                }}
            />
            {/*
            <p style={{ color: 'white' }}>CursorDraw Click position: {`X: ${coordinates.xCoord}, Y: ${coordinates.yCoord}`}<br />
            </p>
            */}
        </>
    );
};

export default CanvasDrawing;
