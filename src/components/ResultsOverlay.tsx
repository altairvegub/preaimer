import { useRef, useEffect } from 'react';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        //coordinates are native (2560 x 1440)
        //to convert to 1920 x 1080 with a 2.5 scale
        //do it based off of 1080 midpoint
        const x = coordinates.x * (1920 / 2560);
        const y = coordinates.y * (1080 / 1440);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    useEffect(() => {
        drawRectangle(coordinates);

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
