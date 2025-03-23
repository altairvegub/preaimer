async function fetchData() {
    const url = process.env.PREAIMER_API;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const userScores = await response.json();
        console.log(userScores);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error has occured:", error);
        }
    }
}

export default fetchData;
