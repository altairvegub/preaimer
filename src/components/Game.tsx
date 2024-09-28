"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Game() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas === null) {
            return
        }

        const ctx = canvas.getContext('2d')
        if (ctx === null) {
            return
        }

        ctx.fillStyle = "rgb(200 0 0)";
        ctx.fillRect(0, 0, 50, 50);
    }, [])

    return (
        <>
            <div className="game">
                <canvas ref={canvasRef}
                    style={{
                        position: 'absolute',
                        top: 180,
                        left: 68,
                        pointerEvents: 'none',
                    }}></canvas>
                <Image id="myImgId" src={`/screenshots/ascent_1_peek.png`} alt="angle" width='1920' height='1080' fill={false} objectFit='cover' />
            </div>
        </>
    );
}
