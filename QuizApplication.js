
let questions = [
    {
        question: "Which language is used for web development?",
        options: ["Java", "HTML", "C"],
        answer: 1
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["let", "int", "float"],
        answer: 0
    },
    {
        question: "Which method displays output in the console?",
        options: ["print()", "console.log()", "display()"],
        answer: 1
    }
];

let index = 0;
let marks = 0;
let answered = false;

function displayQuestion() {

    answered = false;

    document.getElementById("question").innerHTML =
        questions[index].question;

    document.getElementById("option1").innerHTML =
        questions[index].options[0];

    document.getElementById("option2").innerHTML =
        questions[index].options[1];

    document.getElementById("option3").innerHTML =
        questions[index].options[2];

    document.getElementById("result").innerHTML = "";
}

function checkAnswer(choice) {

    if (answered) {
        return;
    }

    answered = true;

    if (choice === questions[index].answer) {

        marks++;

        document.getElementById("result").innerHTML =
            "Correct Answer!";
    }
    else {

        document.getElementById("result").innerHTML =
            "Wrong Answer!";
    }
}

function nextQuestion() {

    if (!answered) {
        alert("Please select an answer first");
        return;
    }

    index++;

    if (index < questions.length) {

        displayQuestion();

    }
    else {

        document.getElementById("question").innerHTML =
            "Quiz Completed!";

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";

        document.getElementById("result").innerHTML =
            "Your Final Score: " + marks + "/3";

        document.getElementById("score").innerHTML =
            "Thank You for Playing!";
    }
}

displayQuestion();