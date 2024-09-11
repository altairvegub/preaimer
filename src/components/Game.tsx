import Image from 'next/image'

export default function Game() {
    return (
        <>
            <div className="game">
                <Image id="myImgId" src={`/screenshots/ascent_1_peek.png`} alt="angle" width="1920" height="1080" fill={false} />
            </div>
        </>
    );
}
