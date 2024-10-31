import Image from 'next/image'
import CanvasDrawing from './CanvasDrawing';

interface GameProps {
    x: number;
    y: number;
}

export default function Game({ x, y }: GameProps) {

    return (
        <>
            <CanvasDrawing
                width={2484}
                height={1397}
                rectangleSize={5}
                color="#ffffff"
            />
            <Image id="myImgId" src={`/screenshots/ascent_1_peek.png`} alt="angle" width='2560' height='1440' fill={false} style={{ objectFit: "cover" }} />
        </>
    );
}
