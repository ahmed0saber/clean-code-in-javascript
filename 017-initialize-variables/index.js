// DON'T
let score
const increaseScore = () => {
    score += 10
    console.log(score)
}
increaseScore()

// DO
let currentScore = 0
const increaseCurrentScore = () => {
    currentScore += 10
    console.log(currentScore)
}
increaseCurrentScore()
