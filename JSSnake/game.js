// game loop constantly update food and snake position on a set time
// import / bring the scripts from the snake.js file to the game script
import {
    update as updateSnake, draw as drawSnake, SNAKE_SPEED,
    getSnakeHead, snakeIntersection
} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/' // refesh page
        }
        return // stops game if they dont hit ok
        //return alert('you lose')
    }
    window.requestAnimationFrame(main) // okay browser tell me when i can render our next frame 
    // requesting a frame to animate our game 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 //converts time form miliseconds to seconds. tells us 
    // how long program has been rendering
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return




    lastRenderTime = currentTime

    update() // update correct position but not draw it 
    draw() // draw everything on screen

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = '' // moves snake without previous pieces behind it
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    // checks for failure state (snake hits edge or itself)
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}