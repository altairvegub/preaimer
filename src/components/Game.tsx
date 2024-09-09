import Image from 'next/image'

export default function Game() {
    return (
        <>
            <div className="game">
                <Image src={`/screenshots/ascent_1.png`} alt="angle" width="1920" height="1080" fill={false} />
            </div>
        </>
    );
}
