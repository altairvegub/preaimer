function Leaderboard() {
    const leaderboardSize = 6;

    interface Player {
        rank: number;
        name: string;
        pixels: string;
    }

    // dummy data, will pull from postgreSQL

    const playerScores = [
        { rank: 1, name: 'Jett', pixels: '1' },
        { rank: 2, name: 'Reyna', pixels: '7' },
        { rank: 3, name: 'Phoenix', pixels: '20' },
        { rank: 4, name: 'Raze', pixels: '53' },
        { rank: 5, name: 'Neon', pixels: '98' },
        { rank: 6, name: 'Yoru', pixels: '120' },
        { rank: 7, name: 'Sage', pixels: '133' },
        { rank: 8, name: 'Skye', pixels: '299' },
        { rank: 9, name: 'Killjoy', pixels: '301' },
        { rank: 10, name: 'Cypher', pixels: '425' },
        { rank: 11, name: 'Sova', pixels: '543' },
        { rank: 12, name: 'Breach', pixels: '567' },
        { rank: 13, name: 'Brimstone', pixels: '623' },
        { rank: 14, name: 'Viper', pixels: '732' },
        { rank: 15, name: 'Omen', pixels: '1201' }
    ];

    const topTenPlayers = playerScores.slice(0, leaderboardSize);

    return (
        <div className="w-full pb-2">
            <div className="">
                {/* <h2 className="text-slate-500 text-xl tracking-tighter text-center">Leaderboard</h2> */}
            </div>
            <div className="rounded-lg overflow-hidden drop-shadow-lg">
                <table className="text-xl w-full table-fixed border-separate border-spacing-0 rounded-lg">
                    <thead className="text-left">
                        <tr className="text-lg text-slate-500 bg-secondary">
                            <th className="pt-2 pb-2 font-medium w-1/6 text-center rounded-tl-lg">Rank</th>
                            <th className="pt-2 pb-2 font-medium w-3/6">Player</th>
                            <th className="pt-2 pb-2 font-medium text-right w-2/6 pr-4">Pixels missed</th>
                        </tr>
                    </thead>
                    <tbody className="text-white bg-secondary odd:bg-primary">
                        {topTenPlayers.map((player: Player, index: number) => (
                            <tr key={player.rank} className={index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}>
                                <td className="pt-2 pb-2 text-center">{player.rank}</td>
                                <td className="pt-2 pb-2 text-xl tracking-tight">{player.name}</td>
                                <td className="pt-2 pb-2 text-right pr-4">{player.pixels}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Leaderboard;
