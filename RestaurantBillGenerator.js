
function generateBill() {

    let name = document.getElementById("name").value;

    let food = document.getElementById("food").value;

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);

    if (name === "" || food === "" || price <= 0 || quantity <= 0) {

        alert("Please enter valid details");
        return;
    }

    let total = price * quantity;

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Food Item: " + food +
        "<br>Food Price: ₹" + price +
        "<br>Quantity: " + quantity +
        "<br>Total Bill: ₹" + total;
}
