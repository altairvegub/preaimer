import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="h-screen flex items-center justify-center flex-col gap-20">
                <div>
                    <p className='text-white text-5xl tracking-tight text-center'>
                        <span>how good is your preaim?</span>
                    </p>

                </div>
                <div>
                    <Link href="/play" className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Play Game
                    </Link>
                </div>
                <div>
                    <Image id='landing' className='' src='/screenshots/ascent_1.jpg' alt='landing image' width='1600' height='900' />
                </div>
            </div>
        </>
    );
}
