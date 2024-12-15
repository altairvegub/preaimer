import Image from 'next/image'

interface GameResultProps {
    coordinates: Coordinates
}

const GameResult: React.FC<GameResultProps> = ({ coordinates }) => {
    return (
        <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    src="/screenshots/ascent_1_peek.png"
                    alt="Cropped image"
                    width={2560}
                    height={1440}
                    style={{
                        width: '1920px',
                        height: '1080px',
                        backgroundPosition: 'center',
                        transition: 'all 1s ease',
                        transform: 'scale(4)',
                        transformOrigin: `${coordinates.x * (1920 / 2540)}px ${coordinates.y * (1080 / 1430)}px`,
                        position: 'relative',
                        left: 0,
                        top: 0,
                    }}
                />
            </div>
        </div>
    )
}

export default GameResult;
