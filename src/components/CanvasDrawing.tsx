import { useEffect, useRef } from 'react';
import type { MouseEvent, MouseEventHandler } from 'react';

interface CanvasProps {
    width?: number;
    height?: number;
    onClick: MouseEventHandler<HTMLElement>;
}

const CanvasDrawing: React.FC<CanvasProps> = ({ width, height, onClick }) => {
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
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('click', drawRectangle as unknown as EventListener);

        return () => {
            canvas.removeEventListener('click', drawRectangle as unknown as EventListener);
        };
    }, []);

    return (
        <>
            <div >
                <canvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    onClick={onClick}
                    className="border border-gray-300"
                    style={{
                        position: 'absolute',
                        cursor: 'crosshair'
                    }}
                />
            </div>
        </>
    );
};

export default CanvasDrawing;
