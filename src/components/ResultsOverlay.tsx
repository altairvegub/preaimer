import { useRef } from 'react';

interface ResultsOverlayProps {

}

function ResultsOverlay() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={1920}
                height={1080}
                className="border border-slate-800"
                style={{
                    position: 'absolute',
                    cursor: 'crosshair'
                }}
            />
        </div>
    )
}

export default ResultsOverlay;
