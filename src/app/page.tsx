'use client'
import Leaderboard from "@/components/Leaderboard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="w-full flex items-center flex-col">
                    <div id="hero" className="p-[70px] space-y-2">
                        <p className='text-white text-6xl tracking-tighter text-center'>
                            <span>how well can you <span className="text-accent">preaim</span>?</span>
                        </p>
                        <p className='text-slate-500 font-light tracking-tight text-xl text-center'>
                            <span>See how your crosshair placement compares to others</span>
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6">
                    <div className="flex flex-1 items-center justify-center">
                        <div id='userForm' className='flex flex-col gap-2'>
                            <div>
                                {/*<input id='username' className='text-xl w-72 px-4 py-2 rounded-xl block' type='text' placeholder='Username' autoComplete="off"></input> */}
                                {/*<input id='email' className='px-10 py-2 rounded block' type='text' placeholder='Email (optional)'></input>*/}
                            </div>
                            {/* <div className="text-white h-5"><p className='text-red-500 font-bold'></p ></div> */}
                            <div className='w-full flex justify-center'>
                                <Link href='/play'>
                                    <button className="w-72 p-3 bg-accent text-black rounded-xl">
                                        Play
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id='leaderboard' className='flex flex-1 text-md'>
                        <div>
                            <h1 className='text-xl tracking-tight text-slate-500 mb-1'>Today's Leaderboard</h1>
                            <Leaderboard size={5} />
                        </div>
                    </div>
                    <div >
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div>
                        <Image id='aimed' className='rounded-xl drop-shadow-xl' src={`https://${process.env.NEXT_PUBLIC_CDN_DOMAIN}/hero.png`} alt='landing image' width='1440' height='500' style={{}} />
                    </div>
                </div>
            </div >
        </>
    );
}
