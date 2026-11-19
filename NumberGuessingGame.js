
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {

    let guess = Number(document.getElementById("guess").value);

    if (guess < 1 || guess > 10) {

        alert("Enter a number between 1 and 10");

    }
    else if (guess === randomNumber) {

        document.getElementById("result").innerHTML =
            "Congratulations! Your Guess is Correct.";

    }
    else {

        document.getElementById("result").innerHTML =
            "Wrong Guess! Try Again.";

    }
}
