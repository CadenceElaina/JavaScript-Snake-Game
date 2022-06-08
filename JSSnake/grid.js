const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() /*ran # between 0 and 1 */ * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
        // random x and y from 1 to gridsize
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    ) // returns true if snake is outside of grid
}