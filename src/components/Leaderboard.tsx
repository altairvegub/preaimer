function Leaderboard() {
    //const leaderboardSize = '5';

    interface Player {
        rank: number;
        name: string;
        pixels: string;
    }

    // dummy data, will pull from postgreSQL

    const playerScores = [
        { rank: 1, name: 'Jett', pixels: '734' },
        { rank: 2, name: 'Reyna', pixels: '289' },
        { rank: 3, name: 'Phoenix', pixels: '567' },
        { rank: 4, name: 'Raze', pixels: '912' },
        { rank: 5, name: 'Neon', pixels: '123' },
        { rank: 6, name: 'Yoru', pixels: '456' },
        { rank: 7, name: 'Sage', pixels: '789' },
        { rank: 8, name: 'Skye', pixels: '345' },
        { rank: 9, name: 'Killjoy', pixels: '678' },
        { rank: 10, name: 'Cypher', pixels: '901' },
        { rank: 11, name: 'Sova', pixels: '234' },
        { rank: 12, name: 'Breach', pixels: '567' },
        { rank: 13, name: 'Brimstone', pixels: '890' },
        { rank: 14, name: 'Viper', pixels: '123' },
        { rank: 15, name: 'Omen', pixels: '456' }
    ];

    const topTenPlayers = playerScores.slice(0, 10);

    return (
        <div className="w-full pb-2 pr-2">
            <div className="">
                <h2 className="text-slate-500 text-2xl tracking-tighter text-center">Leaderboard</h2>
            </div>
            <div className="rounded-lg overflow-hidden drop-shadow-lg">
                <table className="text-lg w-full table-fixed border-separate border-spacing-0 rounded-lg">
                    <thead className="text-left">
                        <tr className="text-slate-500 bg-secondary">
                            <th className="w-1/6 text-center rounded-tl-lg">Rank</th>
                            <th className="w-4/6">Player</th>
                            <th className="w-1/6">Pixels Off</th>
                        </tr>
                    </thead>
                    <tbody className="text-white bg-secondary odd:bg-primary">
                        {topTenPlayers.map((player: Player, index: number) => (
                            <tr key={player.rank} className={index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}>
                                <td className="text-center">{player.rank}</td>
                                <td>{player.name}</td>
                                <td className="text-right pr-2">{player.pixels}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;
