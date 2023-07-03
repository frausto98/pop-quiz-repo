//What we need to do:
    //start timer
    //load questions with 4 answers
    //check if right or wrong
    //change questions
    //keep track of timer/score
    //end game when all questions answered or timer runs to zero
    //localStorage scores and send to high scores page
    //retrieve high score page with other scores/clear scores
//What we need to track:
    //Questions & 
    //Answers
    //Timer duration
    //Score
    //Username
    //

var timeDown = setTimeout("#", 80000); {

}
var userName = "hi";
var score = "hi";

var pageQues = document.createElement("div");
var quesTitle = document.createElement("p");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");


quesTitle.textContent = "What is the index number for the first item in an array?";
pageQues.append(quesTitle);
button1.textContent = "99";
button2.textContent = "5";
button3.textContent = "1";
button4.textContent = "0";

pageQues.append(button1);
pageQues.append(button2);
pageQues.append(button3);
pageQues.append(button4);

document.querySelector("body").append(pageQues);


