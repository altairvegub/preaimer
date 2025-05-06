import Link from "next/link";

function SubmitScoreScreen() {
    return (
        <>
            <div className="bg-secondary w-1/2 flex flex-col gap-2 items-center p-5 rounded-xl">
                <h1 className="text-3xl text-primary-gray font-semibold tracking-tight pb-5">Your Score</h1>
                <input
                    id="username"
                    className="text-xl w-48 lg:w-72 sm:w-48 px-4 py-2 rounded-xl block"
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                />
                <div className="text-white min-h-6">
                    <p className="text-red-500 font-bold"></p>
                </div>
                <Link href="" className="block w-48 lg:w-72 sm:w-48">
                    <button className="w-full p-3 bg-accent text-black rounded-xl hover:bg-accent-dark">
                        Post to Leaderboard
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SubmitScoreScreen;

