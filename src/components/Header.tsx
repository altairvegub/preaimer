import Link from 'next/link';
import Icon from '../components/Icon'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function Header() {
    return (
        <div id='header' className={`${lato.className} tracking-tight container-fluid`}>
            <Link href='/' className='flex flex-row'>
                <div className="flex items-center justify-center pr-1">
                    <Icon />
                </div>
                <div className="text-primary-gray">
                    preaimer
                </div>
            </Link>
        </div>
    )
}

export default Header;
