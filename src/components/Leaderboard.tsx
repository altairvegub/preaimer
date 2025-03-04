function Leaderboard() {
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
                        <tr className="bg-secondary odd:bg-primary">
                            <td className="text-center">1</td>
                            <td>jett</td>
                            <td className="text-right pr-2">2</td>
                        </tr>
                        <tr className="bg-secondary odd:bg-primary">
                            <td className="text-center">2</td>
                            <td>reyna</td>
                            <td className="text-right pr-2">10</td>
                        </tr>
                        <tr className="bg-secondary odd:bg-primary">
                            <td className="text-center">3</td>
                            <td>Brim Stone</td>
                            <td className="text-right pr-2">400</td>
                        </tr>
                        <tr className="bg-secondary odd:bg-primary">
                            <td className="text-center">4</td>
                            <td>Clove</td>
                            <td className="text-right pr-2">555</td>
                        </tr>
                        <tr className="bg-secondary odd:bg-primary">
                            <td className="text-center">5</td>
                            <td>Sova</td>
                            <td className="text-right pr-2">1099</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;
