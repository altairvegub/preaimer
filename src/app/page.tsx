import Link from "next/link";

export default function Home() {
    return (
        <Link href="/play" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Play Game
        </Link>
    );
}
