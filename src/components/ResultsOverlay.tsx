import { useRef, useEffect, useState } from 'react';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) {
    const [scale, setScale] = useState(2.5);
    const [scaleOffset, setScaleOffset] = useState({ x: 0, y: 0 });
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = (coordinates.x * (1920 / 2560));
        const y = (coordinates.y * (1080 / 1440));

        let rectangleSize = 5;
        let color = '#FFFFFF'

        //ctx.scale(2, 2);

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
        setTimeout(() => {
            drawRectangle({ x: 1280, y: 720 });
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
                }}
            />
        </div>
    )
}

export default ResultsOverlay;
