import Icon from '../components/Icon'
import { Lato } from 'next/font/google'

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export default function Header() {
	return (
		<div id='header' className={lato.className}>
			<Icon />
			preaimer
		</div>
	)
}
