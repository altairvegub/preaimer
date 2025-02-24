import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center">
            <Link href="/play" className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Play Game
            </Link>
        </div>
    );
}
