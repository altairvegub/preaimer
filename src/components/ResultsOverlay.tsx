import { useRef, useEffect, useState } from 'react';
import { useGameStore } from './GameController';

interface ResultsOverlayProps {
    coordinates: Coordinates;
}

function ResultsOverlay({ coordinates }: ResultsOverlayProps) { // pass native coords and draws onto equivalent canvas resolution
    const scenarios = useGameStore(state => state.scenarios)
    const scenarioNum = useGameStore(state => state.scenario)
    let playScenarioPath = '';

    if (scenarioNum > 0 && scenarioNum < scenarios.length) {
        playScenarioPath = `/screenshots/${scenarios[scenarioNum - 1]}.png`;
    }

    const [scale, setScale] = useState(2);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const imageResolutionX = 2560;
    const imageResolutionY = 1440;
    const canvasResolutionX = 3840;
    const canvasResolutionY = 2160;

    const resolutionRatioX = canvasResolutionX / imageResolutionX;
    const resolutionRatioY = canvasResolutionY / imageResolutionY;

    const adjustedX: number = (canvasResolutionX / scale) - (coordinates.x) * (resolutionRatioX);
    const adjustedY: number = (canvasResolutionY / scale) - (coordinates.y) * (resolutionRatioY);

    const offSetX = coordinates.x - imageResolutionX / 2;
    const offSetY = coordinates.y - imageResolutionY / 2;

    const midPointPos: Coordinates = {
        x: imageResolutionX / 2,
        y: imageResolutionY / 2,
    }

    const adjClickedPos: Coordinates = {
        x: midPointPos.x - offSetX,
        y: midPointPos.y - offSetY,
    }

    const drawRectangle = (coordinates: Coordinates) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const x = (coordinates.x * (resolutionRatioX));
        const y = (coordinates.y * (resolutionRatioY));

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
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startCoord.x * resolutionRatioX, startCoord.y * resolutionRatioX);
        ctx.lineTo(endCoord.x * resolutionRatioY, endCoord.y * resolutionRatioY);

        //const xSlope = (endCoord.x - startCoord.x) / 10;
        //const ySlope = (endCoord.y - startCoord.y) / 10;
        //let x = (startCoord.x * resolutionRatioX);
        //let y = (startCoord.y * resolutionRatioY);

        //x += xSlope;
        //y += ySlope;
        //ctx.lineTo(x, y);
        //ctx.moveTo(x, y);
        ctx.strokeStyle = "white";
        ctx.stroke();
    };

    useEffect(() => {
        drawRectangle({ x: midPointPos.x, y: midPointPos.y });
        setTimeout(() => {
            drawLine(adjClickedPos, midPointPos);
            drawRectangle(adjClickedPos);
            drawRectangle({ x: midPointPos.x, y: midPointPos.y });
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
                        transform: translate(${-(canvasResolutionX / 2 / 2)}px, ${-(canvasResolutionY / 2 / 2)}px);
                    }
                    25% {
                        transform: translate(${-(canvasResolutionX / 2 / 2)}px, ${-(canvasResolutionY / 2 / 2)}px);
                    }
                    100% {
                        transform: translate(${-(canvasResolutionX / 2 / 2) - adjustedX}px, ${-(canvasResolutionY / 2 / 2) - adjustedY}px);
                    }
                }
            `}</style>
        </div>
    )
}

export default ResultsOverlay;
