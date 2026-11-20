
function checkNumber() {

    let num = Number(document.getElementById("number").value);

    if (document.getElementById("number").value === "") {
        alert("Please enter a number");
        return;
    }

    if (num % 2 === 0) {

        document.getElementById("result").innerHTML =
            num + " is an Even Number";

    }
    else {

        document.getElementById("result").innerHTML =
            num + " is an Odd Number";

    }
}
