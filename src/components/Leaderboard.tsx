import { fetchData } from "@/app/lib/fetchData";
import { useEffect, useState } from "react";

type LeaderboardProps = {
    size: number,
};

interface Score {
    userId: number;
    username: string;
    scenarioId: number;
    xCoordinate: number;
    yCoordinate: number;
    distance: number;
    achievedAt: string;
}

function Leaderboard({ size }: LeaderboardProps) {
    const [scores, setScores] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadScores = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await fetchData();

                if (data) {
                    setScores(data);
                } else {
                    setError("Failed to load scores. Server returned no data.");
                    setScores(null);
                }
            } catch (err: unknown) {
                console.error("Error calling fetchData action:", err);
                setError(err instanceof Error ? err.message : "An unknown error occurred while fetching scores.");
                setScores(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadScores();
    }, []);

    console.log(scores?.items);

    //const leaderboardSize = size;

    // dummy data, will pull from postgreSQL
    //
    //const playerScores: any = [];
    //
    // const playerScores = [
    //     { rank: 1, name: 'Jett', pixels: '1' },
    //     { rank: 2, name: 'Reyna', pixels: '7' },
    //     { rank: 3, name: 'Phoenix', pixels: '20' },
    //     { rank: 4, name: 'Raze', pixels: '53' },
    //     { rank: 5, name: 'Neon', pixels: '98' },
    //     { rank: 6, name: 'Yoru', pixels: '120' },
    //     { rank: 7, name: 'Sage', pixels: '133' },
    //     { rank: 8, name: 'Skye', pixels: '299' },
    //     { rank: 9, name: 'Killjoy', pixels: '301' },
    //     { rank: 10, name: 'Cypher', pixels: '425' },
    //     { rank: 11, name: 'Sova', pixels: '543' },
    //     { rank: 12, name: 'Breach', pixels: '567' },
    //     { rank: 13, name: 'Brimstone', pixels: '623' },
    //     { rank: 14, name: 'Viper', pixels: '732' },
    //     { rank: 15, name: 'Omen', pixels: '1201' }
    // ];

    //const topTenPlayers = playerScores.slice(0, leaderboardSize);

    return (
        <>
            <div className="w-full pb-6">
                <div className="">
                    {/* <h2 className="text-slate-500 text-xl tracking-tighter text-center">Leaderboard</h2> */}
                </div>
                <div className="drop-shadow-lg overflow-hidden rounded-lg border border-secondary">
                    <table className="text-xl w-full table-fixed border-collapse">
                        <thead className="text-left">
                            <tr className="text-base text-slate-500 bg-secondary">
                                <th className="pt-2 pb-2 font-medium w-1/6 text-center">Rank</th>
                                <th className="pt-2 pb-2 font-medium w-3/6">Player</th>
                                <th className="pt-2 pb-2 font-medium text-right w-2/6 pr-4">Avg. Pixels Missed</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary-gray bg-secondary odd:bg-primary">
                            {
                                scores?.items?.map((score: Score, index: number) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}>
                                        <td className="pt-2 pb-2 text-center">{index + 1}</td>
                                        <td className="pt-2 pb-2 text-xl tracking-tight">{score.username}</td>
                                        <td className="pt-2 pb-2 text-right pr-4">{Math.round(score.distance)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Leaderboard;
