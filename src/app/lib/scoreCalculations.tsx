export function calculateDistance(coordinates: Coordinates) {
    const midX = 1280;
    const midY = 720;

    const x = coordinates.x;
    const y = coordinates.y;

    const score = Math.round(Math.sqrt(Math.pow((x - midX), 2) + Math.pow((y - midY), 2))) //distance formula of click to mid-point (target)

    return score;
}

export function calculateHeight(coordinates: Coordinates) {
    const midYCoord = 720;
    const height = Math.abs(midYCoord - coordinates.y);

    return height;
}

