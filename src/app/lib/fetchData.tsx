'use server'

export interface Score {
    userId: number;
    username: string;
    scenarioId: number;
    xCoordinate: number;
    yCoordinate: number;
    distance: number;
    achievedAt: Date;
}

export async function fetchData() {
    const url = process.env.PREAIMER_API + '/scores';
    if (!url) throw new Error("API_URL is not defined");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const scores: Score[] = await response.json();

        return scores;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error has occured:", error);
        }
    }
}
