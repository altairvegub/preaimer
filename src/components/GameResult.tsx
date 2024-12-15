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
                        animation: `panTransformOrigin 2000ms ease forwards`,
                        transform: 'scale(2.25)',
                        position: 'relative',
                        left: 0,
                        top: 0,
                    }}
                />
                <style jsx>{`
                   @keyframes panTransformOrigin {
                     0% {
                       transform-origin: ${coordinates.x * (1920 / 2540)}px ${coordinates.y * (1080 / 1430)}px;
                     }
                     100% {
                       transform-origin: ${960}px ${540}px;
                     }
                   }
                 `}</style>
            </div>
        </div>
    )
}

export default GameResult;
