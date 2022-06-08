import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition() // 0 is technically outside our grid
const EXPANSION_RATE = 5 // gains 1 segment if food is eaten

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        //{ x: 20, y: 10 } // random pos
    }
}

export function draw(gameBoard) {
    //console.log('draw snake')
    const foodElement = document.createElement('div')

    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {// not on snake with new food position
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}