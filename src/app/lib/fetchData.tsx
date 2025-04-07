'use server'
async function fetchData() {
    const url = process.env.PREAIMER_API + '/scores';
    if (!url) throw new Error("API_URL is not defined");
    console.log("fetchData() called");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const userScores = await response.json();
        console.log(userScores);
        return await userScores;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error has occured:", error);
        }
    }
}

export default fetchData;
