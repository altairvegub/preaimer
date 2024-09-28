import Image from 'next/image'

export default function GameResult() {


    return (
        <div style={{ position: 'relative', width: '1280px', height: '720px', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    src="/screenshots/ascent_1_peek.png"
                    alt="Cropped image"
                    width={1280 * 2}
                    height={720 * 2}
                    style={{
                        transform: `scale(3)`,
                        transformOrigin: 'center'
                    }}
                />
            </div>
        </div>
    )
}
