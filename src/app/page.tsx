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
                            <span>how well can you <span className="text-red-600">preaim</span>?</span>
                        </p>
                        <p className='text-slate-500 font-light text-xl text-center'>
                            <span>See how your crosshair placement compares to others</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-1 items-center justify-center">
                        <div id='userForm' className='text-md flex flex-col gap-4'>
                            <div>
                                <input id='username' className='w-72 px-4 py-2 rounded block' type='text' placeholder='Username'></input>
                                {/*<input id='email' className='px-10 py-2 rounded block' type='text' placeholder='Email (optional)'></input>*/}
                            </div>
                            <div>
                                <Link href='/play'>
                                    <button className="w-72 py-2 bg-accent text-primary font-bold rounded hover:brightness-[120%]" style={{}}>
                                        Play Game
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id='leaderboard' className='flex flex-1 gap-5 text-md'>
                        <Leaderboard />
                    </div>
                    <div >
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <Image id='aimed' className='rounded-xl drop-shadow-xl' src='/screenshots/hero.png' alt='landing image' width='1440' height='700' style={{}} />
                    </div>
                </div>
            </div>
        </>
    );
}
