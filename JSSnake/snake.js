import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
const snakeBody = [
    { x: 10, y: 11 }]//,
//   { x: 11, y: 11 },
// { x: 12, y: 11 }] // x y pos
let newSegments = 0 // by default our snake is not growing 

export function update() {
    addSegments()

    //console.log('update snake')
    // take pos of given segment ex head block behind takes that pos
    const inputDirection = getInputDirection() // calls the function that tells us the users input
    for (let i = snakeBody.length - 2; i >= 0; i--)// 2nd to last element in our snake 
    {
        snakeBody[i + 1] = { ...snakeBody[i] } // duplicate of our snake at pos i to avoid ref errors
        // moves forward to parent position on snakes body 
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    //snakeBody[0].x += 0
    // snakeBody[0].y += 1 // as y increases the snake goes down 
}

export function draw(gameBoard) {
    //console.log('draw snake')
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignroeHead = false } = {}) {
    // pass in an empty object by default 
    // if our snakes position is at the food then 
    // .some means if any of our snakes body is on the food then return true
    return snakeBody.some((segment, index) => {
        if (ignroeHead && index === 0) return false // ignoring the head intersection bc head is obviously already intereacting/ on the location teh head is at 
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0] // first element in our array is the snake head
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignroeHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
        // duplicate last segment of snake and append to the end of snake
        //snakeBody[snakeBody.length] = { snakeBody[snakeBody.length - 1]}
    }

    newSegments = 0 // prevents the snake from endlessly expanding
}