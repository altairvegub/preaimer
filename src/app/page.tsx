import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="h-1/2 flex justify-center items-center flex-col gap-10">
                <div>
                    <p className='text-white text-6xl tracking-tighter text-center'>
                        <span>how well can you preaim?</span>
                    </p>

                </div>
                <div id='userForm' className='flex flex-col gap-5 text-md'>
                    <input id='username' className='w-72 px-4 py-2 rounded block' type='text' placeholder='Username'></input>
                    {/*<input id='email' className='px-10 py-2 rounded block' type='text' placeholder='Email (optional)'></input>*/}
                </div>
                <div >
                    <Link href='/play'>
                        <button className="w-72 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" style={{}}>
                            Play Game
                        </button>
                    </Link>
                </div>
                <div className='flex flex-row gap-10 overflow-hidden h-[900px]'>
                    <div style={{}}>
                        <Image id='aimed' src='/screenshots/hero.png' alt='landing image' width='1590' height='1000' style={{}} />
                    </div>
                </div>
            </div>
        </>
    );
}
