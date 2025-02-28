function Leaderboard() {
    return (
        <div className="">
            <div className="leaderboard">
                <h2 className="text-white text-2xl tracking-tighter">Leaderboard</h2>
                <table className="bg-white text-lg">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Pixels Off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Player One</td>
                            <td>10,500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Player Two</td>
                            <td>9,200</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Player Three</td>
                            <td>8,750</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Player Four</td>
                            <td>7,300</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Player Five</td>
                            <td>6,800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;
