let inputDirection = { x: 0, y: 0 } // default snake is not moving
let lastInputDirection = { x: 0, y: 0 }
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // checks if snake is going down if so it cannot turn on itself to go up
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 } // as we increase y you go down screen
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 } // as x decreases we go left
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}