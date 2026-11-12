function calculateInterest() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);

    let interest = (principal * rate * time) / 100;

    document.getElementById("result").innerHTML =
        "Simple Interest: ₹" + interest;
}