
function withdraw() {

    let name = document.getElementById("name").value;

    let balance = Number(document.getElementById("balance").value);

    let amount = Number(document.getElementById("amount").value);

    if (name === "" || balance <= 0 || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    if (amount <= balance) {

        let remaining = balance - amount;

        document.getElementById("result").innerHTML =
            "Account Holder: " + name +
            "<br>Withdrawn Amount: ₹" + amount +
            "<br>Remaining Balance: ₹" + remaining;

    }
    else {

        document.getElementById("result").innerHTML =
            "Insufficient Balance!";
    }
}
