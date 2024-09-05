import CursorTracker from '../components/CursorTracker';
import Game from '../components/Game'
import Score from '../components/Score'

export default function Home() {
  return (
    <div className='game'>
      <Game />
      <Score />
      <CursorTracker />
    </div>
  );
}
