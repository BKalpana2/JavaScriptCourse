
function calculateBill() {

    let name = document.getElementById("name").value;
    let units = Number(document.getElementById("units").value);

    let bill;

    if (name === "" || units <= 0) {
        alert("Please enter valid details");
        return;
    }

    if (units <= 100) {
        bill = units * 2;
    }
    else if (units <= 200) {
        bill = units * 3;
    }
    else {
        bill = units * 5;
    }

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Units Consumed: " + units +
        "<br>Total Electricity Bill: ₹" + bill;
}
