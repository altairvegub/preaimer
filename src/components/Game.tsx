import Image from 'next/image'

export default function Game() {


	return (
		<>
			<div className="game">
				<Image src={`/screenshots/bind_1_a.png`} alt="angle" width="1600" height="900" fill={false} />
			</div>
		</>
	);
}
