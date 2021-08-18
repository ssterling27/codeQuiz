let highscoreDiv = document.getElementById('highscore')
let gameTimerEl = document.getElementById('gameTimer')
let quesTimerEl = document.getElementById('quesTimer')
let mainEl = document.getElementById('details');
let timerTab = document.getElementById('timers')
let contentArea = document.getElementById('content')

let test = false
let score = 0
let quiz = {}
let quizType = ''

let gameDuration = 0
let gameSecElapsed = 0
let gameInterval

let questionDuration = 15
let questionSecElapsed = 0
let questionInterval

const clearDetails = event => {
  event.preventDefault()
  contentArea.innerHTML = ''
}

const reset = () => {
  quizType = ''
  score = 0
  
  gameDuration = 0
  gameSecElapsed = 0
  gameInterval
}


const getStarted = () => {
  let startButton = document.getElementById('start')
  let quizElem = document.createElement('div')
}