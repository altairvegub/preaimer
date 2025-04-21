import { useRef, useEffect, useCallback, useMemo } from 'react';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) { // pass native coords and draws onto equivalent canvas resolution
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const scale = 2;

    const imageResolution: Coordinates = useMemo(() => {
        return {
            x: 2560,
            y: 1440,
        }
    }, []);

    const canvasResolution: Coordinates = {
        x: 3840,
        y: 2160,
    }

    const resolutionRatio = canvasResolution.x / imageResolution.x;

    const adjustedCoordinates: Coordinates = {
        x: (canvasResolution.x / scale) - (coordinates.x) * (resolutionRatio),
        y: (canvasResolution.y / scale) - (coordinates.y) * (resolutionRatio),

    }

    const offSet: Coordinates = useMemo(() => {
        return {
            x: coordinates.x - imageResolution.x / 2,
            y: coordinates.y - imageResolution.y / 2,
        }
    }, [coordinates, imageResolution]);

    const midPointPos: Coordinates = useMemo(() => {
        return {
            x: imageResolution.x / 2,
            y: imageResolution.y / 2,
        }
    }, [imageResolution]);

    const adjClickedPos: Coordinates = useMemo(() => {
        return {
            x: midPointPos.x - offSet.x,
            y: midPointPos.y - offSet.y,
        }
    }, [midPointPos, offSet])

    const drawRectangle = useCallback((coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = (coordinates.x * (resolutionRatio));
        const y = (coordinates.y * (resolutionRatio));

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
    }, [resolutionRatio]);

    const drawLine = useCallback((startCoord: Coordinates, endCoord: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.imageSmoothingEnabled = true;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startCoord.x * resolutionRatio, startCoord.y * resolutionRatio);
        ctx.lineTo(endCoord.x * resolutionRatio, endCoord.y * resolutionRatio);

        ctx.strokeStyle = "#f5f5f7";
        ctx.stroke();
    }, [resolutionRatio]);

    useEffect(() => {
        drawRectangle({ x: midPointPos.x, y: midPointPos.y });
        setTimeout(() => {
            drawLine(adjClickedPos, midPointPos);
            drawRectangle(adjClickedPos);
            drawRectangle({ x: midPointPos.x, y: midPointPos.y });
        }, 1500)

        return () => {
        };
    }, [drawLine, drawRectangle, adjClickedPos, midPointPos]);

    return (
        <div style={{}}>
            <canvas
                ref={canvasRef}
                width={canvasResolution.x}
                height={canvasResolution.y}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    animation: `resultsPan 1500ms ease forwards`,
                }}
            />
            <style jsx>{`
                @keyframes resultsPan {
                    0% {
                        transform: translate(${-(canvasResolution.x / 2 / 2)}px, ${-(canvasResolution.y / 2 / 2)}px);
                    }
                    25% {
                        transform: translate(${-(canvasResolution.x / 2 / 2)}px, ${-(canvasResolution.y / 2 / 2)}px);
                    }
                    100% {
                        transform: translate(${-(canvasResolution.x / 2 / 2) - adjustedCoordinates.x}px, ${-(canvasResolution.y / 2 / 2) - adjustedCoordinates.y}px);
                    }
                }
            `}</style>
        </div>
    )
}

export default ResultsOverlay;
