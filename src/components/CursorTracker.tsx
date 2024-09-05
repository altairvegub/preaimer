'use client'
import { useState, useEffect } from 'react';

export default function CursorTracker() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
	const targetPos = { x: 1284, y: 641 };

	const handleMouseMove = (event: any) => {
		setPosition({
			x: event.clientX,
			y: event.clientY,
		});
	};

	const handleMouseUp = (event: any) => {
		setClickPos({
			x: event.clientX,
			y: event.clientY,
		})
	}

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);

	return (
		<div id='tracker'>
			<p>Cursor position: {`X: ${position.x}, Y: ${position.y}`}<br />
				Clicked position: {`X: ${clickPos.x}, Y: ${clickPos.y}`}</p>
		</div>
	);
}
