
let totalAmount = 0;

function addExpense() {

    let name = document.getElementById("expenseName").value;

    let amount = Number(document.getElementById("amount").value);

    if (name === "" || amount <= 0) {

        alert("Please enter valid details");
        return;
    }

    totalAmount = totalAmount + amount;

    document.getElementById("result").innerHTML +=
        name + " - ₹" + amount + "<br>";

    document.getElementById("total").innerHTML =
        "Total Expenses: ₹" + totalAmount;

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}
