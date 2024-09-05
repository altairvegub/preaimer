'use client'
import { useState } from "react";

export default function Score(props) {
	const [clickPos, setClickPos] = useState({ x: 0, y: 0 })
	const targetPos = { x: 0, y: 0 }
	return (
		<div id='score'>
			<p>
				Target: X: {targetPos.x} Y: {targetPos.y}<br />
				Difference: X: {clickPos.x} Y: {clickPos.y}<br />
				Score:
			</p >
		</div>
	);
}
