var questions = [
     {
     question: "What is the index number for the first item in an array?",
     answers: [
         {"1": false},
         {"100": false},
         {"0": true},
         {"5": false},
     ]
     },
     {
         question: "What is the index number for the first item in an array?",
         answers: [
             '1', 9, '2', 7
         ]
         },
]

var startBtn = document.getElementById('click')
var firstContainer = document.getElementById('first')
var container = document.getElementById('container')
var questionIndex = 0;
var timerStart = 10;
var timeText = document.getElementById('timer')
var clearTime;

function begin() {
    // hide the container with the button
    firstContainer.setAttribute('class', 'hide')
    // display the container with the id container
    container.classList.remove('hide')

    // start the timer and display the time on the page
    timeText.textContent = 'time: ' + timerStart
    clearTime = setInterval(() => {
        timerStart--;
        timeText.textContent = 'time: ' + timerStart

        if (timerStart === 0) {
            gameOver()
        }

    }, 1000);


    displayNames()

}

function displayNames() {
    // empty the container before creating the next items
    container.innerHTML = ''

    // then display a name in the container
    // create, add, append
    var h1El = document.createElement('h1')

    h1El.textContent = questions[questionIndex].question

    container.append(h1El)

    // then have a button to move to the next name
    // var nextBtn =  document.createElement('button')
    // nextBtn.textContent = 'Next'

    // nextBtn.addEventListener('click', nextItem)

    // container.append(nextBtn)

    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        var nextBtn =  document.createElement('button')
        nextBtn.textContent = questions[questionIndex].answers[i]

        nextBtn.addEventListener('click', nextItem)

        container.append(nextBtn)

    }
}

function nextItem() {
    questionIndex++;
    if(questions.length === questionIndex){
      gameOver()
    }else{
    displayNames();
    }
}

function gameOver(){
    clearInterval(clearTime)
}

startBtn.addEventListener('click', begin)