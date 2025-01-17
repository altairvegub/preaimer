import Image from 'next/image'

interface GameProps {
    x: number;
    y: number;
}

function Game({ x, y }: GameProps) {

    return (
        <>
            <Image id="myImgId" className="select-none" src={`/screenshots/4k_range.jpg`} alt="angle" width='2560' height='1440' fill={false} style={{ objectFit: "cover" }} />
        </>
    );
}

export default Game;
