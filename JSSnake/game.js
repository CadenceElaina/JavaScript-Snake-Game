// game loop constantly update food and snake position on a set time
// import / bring the scripts from the snake.js file to the game script
import {
    update as updateSnake, draw as drawSnake, snakeSpeed,
    getSnakeHead, snakeIntersection, score
} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid, randomGridPosition } from './grid.js'


let gameOver = false
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let scores = [];

const highScore1 = localStorage.getItem('scores')
const highScore = JSON.parse(highScore1)

let highScoreSpan = document.getElementById("highScore");
highScoreSpan.innerHTML = highScore /* highScore */;

/* let speedInput = document.getElementById("speedValue").value;
document.getElementById('speed').addEventListener("click", changeSpeed(speedInput));
 */

function main(currentTime) {

    /* 
        console.log(score) */
    if (gameOver) {
        scores.push(score)
        localStorage.setItem('scores', JSON.stringify(scores));
        console.log(scores)
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
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    /*  console.log(score); */



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

/* function changeSpeed(speed) {
    console.log(speed)
    /*     snakeSpeed = speed; */
/* } * / */