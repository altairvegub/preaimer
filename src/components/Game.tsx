import Image from 'next/image'

interface GameProps {
    x: number;
    y: number;
}

export default function Game({ x, y }: GameProps) {

    return (
        <>
            <Image id="myImgId" className="select-none" src={`/screenshots/ascent_1_peek.png`} alt="angle" width='2560' height='1440' fill={false} style={{ objectFit: "cover" }} />
        </>
    );
}
