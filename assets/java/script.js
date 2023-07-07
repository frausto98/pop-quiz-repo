var questions = [
    {
        question: "What is the index number for the first item in an array?",
        answers: [
            "1", "100", "0", "5"
        ],
        trueAnswer: "0"
    },
    {
        question: "What is the pair name in objects?",
        answers: [
            "Apple / Banana", "House / Room", "Key / Value", "Type / Property"
        ],
        trueAnswer: "Key / Value"
    },
    {
        question: "Where is local storage?",
        answers: [
            "Home", "On the Browser", "The Local Store", "The Computer"
        ],
        trueAnswer: "On the Browser"
    },
    {
        question: "What kind of Loop is it?",
        answers: [
            "a fruit loop", "a four loop", "4 loops", "For Loop"
        ],
        trueAnswer: "For Loop"
    },
    {
        question: "Which of the following allows you to space your syntax?",
        answers: [
            "The '1' Key", "Backspace key", "Tab key", "Enter key"
        ],
        trueAnswer: "Tab key"
    }

]
var highScBtn = document.getElementById('highScoreButton')
var startBtn = document.getElementById('click')
var firstContainer = document.getElementById('first')
var container = document.getElementById('container')
var summaryPage = document.getElementById('summaryPage')
var scorePage = document.getElementById('highscores')
var listedScores = document.getElementById('listScores')

var questionIndex = 0;
var scoreIndex = 0;
var timerStart = 20;
var timeText = document.getElementById('timer')
var clearTime;
var highScoreArray =  JSON.parse(localStorage.getItem("userInfo")) || []


function begin() {
    // hide the container with the button
    questionIndex = 0;
    timerStart = 25;
    timeText.classList.remove('hide');
    container.classList.remove('hide');


    firstContainer.setAttribute('class', 'hide')
    summaryPage.setAttribute('class', 'hide')
    scorePage.setAttribute('class', 'hide')
    // display the container with the id container
    

    // start the timer and display the time on the page
    timeText.textContent = 'time: ' + timerStart
    clearTime = setInterval(() => {
        timerStart--;
        timeText.textContent = 'time: ' + timerStart

        if (timerStart === 0) {
            gameOver()
        }

    }, 1000);


    displayQuestions()

}

function displayQuestions() {
    // empty the container before creating the next items
    container.innerHTML = ''

    // then display a name in the container
    // create, add, append
    var h1El = document.createElement('h1')

    h1El.textContent = questions[questionIndex].question

    container.append(h1El)

    // then have a button to move to the next name
    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        var nextBtn = document.createElement('button')
        nextBtn.textContent = questions[questionIndex].answers[i]

        nextBtn.addEventListener('click', nextItem)

        container.append(nextBtn)

    }
}

function nextItem() {
    //checks answers
    //an attempt was made :\
    var answer1 = questions[0].answers[2]
    var answer2 = questions[1].answers[2] 
    var answer3 = questions[2].answers[1]
    var answer4 = questions[3].answers[3]
    var answer5 = questions[4].answers[2]

    if (answer1 !== questions[0].trueAnswer) {
        timerStart -= 3;
    }
    //if right, display correct
    //if wrong, remove time, and display wrong
    
    questionIndex++;
    if (questions.length === questionIndex) {
        gameOver()
    } else {
        displayQuestions();
    }
}



function gameOver() {
    summaryPage.innerHTML = '';
    clearInterval(clearTime);
    //questions clear
    container.setAttribute('class', 'hide');

    summaryPage.classList.remove('hide');
    //message appears saying all done
    var h1El = document.createElement('h1');
    h1El.textContent = "Game Over";

    // create element to display score
    var timeScore = document.createElement('h3');
    timeScore.textContent = "High Score: " + timerStart

    //input field for intials + display remaining time
        // <div>
        //  <label for='input'>Initials:</label>
        //  <input type='text' id='input' />
        //  <button type='button' id='saveBtn'>Submit</button>
        // </div>
    var div = document.createElement('div')
    var label = document.createElement('label')
    var input = document.createElement('input')
    var button = document.createElement('button')

    label.setAttribute('for', 'input')
    label.textContent = 'Initials:'
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input')
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'saveBtn')
    button.textContent = "Save Here";
    
    //added event listener to start a function once Save Here us clicked
button.addEventListener('click', saveFiles)

    //appends the label, input and button to the divided content on the page.
div.append(label, input, button);
    //appends the h1
summaryPage.append(h1El, timeScore, div)

}
//this function is meant to save the scores
function saveFiles() {
    var input = document.getElementById('input')
    var userScore = { 
        userInit: input.value,
        highScore: timerStart,
    }
//here, the user's input, initials, and the highscore, time, is put into an object
highScoreArray.push(userScore)
localStorage.setItem("userInfo", JSON.stringify(highScoreArray))
showScores()
//the object is stingified
}
//this function is meant to display high scores and buttona
function showScores(){
    // scorePage.innerHTML = '';
    firstContainer.setAttribute('class', 'hide')
    summaryPage.setAttribute('class', 'hide');
    timeText.setAttribute('class', 'hide');
    scorePage.classList.remove('hide');
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');
    //above and below, the pages are being set to new attriubtes
    // and the buttons are being assigned attributes and function
    button1.setAttribute('type', 'button');
    button1.setAttribute('id', 'startOver')
    button2.setAttribute('type', 'button')
    button2.setAttribute('id', 'clearScoreButton')
    button1.textContent = "Start Over";
    button2.textContent = "Clear Score";
    var h1El = document.createElement('h1')
    h1El.textContent = "High Scores: "
    //the buttons are appended to the page
    scorePage.append(button1, button2, h1El);
    button1.addEventListener('click', begin)
    button2.addEventListener('click', clearScores)

    for (var i = 0; i < highScoreArray.length; i++) {
        // console.log(highScoreArray);
        var li = document.createElement('li')
        var text = `${highScoreArray[i].userInit} : ${highScoreArray[i].highScore}`;
        console.log(li)
        li.appendChild(document.createTextNode(text));

        listedScores.appendChild(li);
    //here, as the scores were saved in the previous container, they;re pulled up and displayed in the list
        
        
    //scoreboard w "start over" & "clear score"
    
    // create the list of highsscores
    }

    
}

function clearScores () {
    localStorage.clear();
}

startBtn.addEventListener('click', begin)
highScBtn.addEventListener('click', showScores)

