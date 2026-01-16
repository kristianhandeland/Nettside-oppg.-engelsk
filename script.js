/*//JS projekt 1 (say hello)
function sayHello() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").textContent =
        "Hello " + name + "!";
}



let secretNumber = 67;

//JS projekt 2 (guess the number spill)
function checkGuess() {
    let guess = document.getElementById("guess").value;

    if (guess == secretNumber) {
        document.getElementById("result").textContent = "You're Right!!!";
    } else {
        document.getElementById("result").textContent = "Wrong answer! Please try again!";
    }
}

//JS projekt 3 (darkmode)
function darkMode() {
    document.body.classList.toggle("dark");
}*/

//JS projekt 4 (Mini quiz)
let questions = [
    "What is the capital of Australia?"
    ,"How many people live in Australia?"
    ,"What continent is Australia in?"
    ,"What is the largest city in Australia?"
    ,"What is Australias Currency"

];

let answers = [
    "Canberra"
    ,"27 mill"
    ,"Oceania"
    ,"Sydney"
    ,"Australian Dollars"
]; 

let currentQuestion = 0;
let score = 0;
let attempts = 0;

document.getElementById("question").textContent =
    questions[currentQuestion];

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correct = false;

     attempts++; 

        if (userAnswer.toLowerCase() === answers[currentQuestion].toLowerCase()) {
            score++;         
            correct = true;
            document.getElementById("quizResult").textContent = "Correct!";
            document.getElementById("quizResult").style.color = "#4CAF50"; 
        } else {
            document.getElementById("quizResult").textContent = "Wrong answer!";
            document.getElementById("quizResult").style.color = "#ff4c4c"; 
            }

            currentQuestion++;


            document.getElementById("scoreBoard").textContent =
    "Score: " + score + " / " + attempts;


       if (currentQuestion < questions.length) {
            document.getElementById("question").textContent =
                questions[currentQuestion];
        } else {
            document.getElementById("question").textContent =
                "Quiz finished!";
        }

    if (correct) {
        document.getElementById("quizResult").textContent = "Correct!";
    } else {
        document.getElementById("quizResult").textContent = "Wrong answer";
    }
}
