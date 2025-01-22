import Icon from '../components/Icon'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function Header() {
    return (
        <div id='header' className={lato.className} class="container-fluid">
            <div className="pr-1">
                <Icon />
            </div>
            preaimer
        </div>
    )
}

export default Header;
