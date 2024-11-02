import GameResult from '../components/GameResult';
import CursorTracker from '../components/CursorTracker';
import Score from '../components/Score'

export default function Home() {
    return (
        <div className='game'>
            <CursorTracker />
            <Score />
            <GameResult />
        </div>
    );
}
