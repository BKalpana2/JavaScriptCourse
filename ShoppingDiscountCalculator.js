
function calculate() {

    let name = document.getElementById("name").value;

    let price = Number(document.getElementById("price").value);

    let discount = Number(document.getElementById("discount").value);

    if (name === "" || price <= 0 || discount < 0 || discount > 100) {
        alert("Please enter valid details");
        return;
    }

    let discountAmount = price * discount / 100;

    let finalPrice = price - discountAmount;

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Original Price: ₹" + price +
        "<br>Discount Amount: ₹" + discountAmount +
        "<br>Final Price: ₹" + finalPrice;
}
