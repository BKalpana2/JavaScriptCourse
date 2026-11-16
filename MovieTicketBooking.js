
function bookTicket() {

    let name = document.getElementById("name").value;

    let movie = document.getElementById("movie").value;

    let tickets = Number(document.getElementById("tickets").value);

    let ticketPrice = 150;

    if (name === "" || movie === "" || tickets <= 0) {

        alert("Please enter valid details");
        return;
    }

    let total = tickets * ticketPrice;

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Movie Name: " + movie +
        "<br>Number of Tickets: " + tickets +
        "<br>Ticket Price: ₹" + ticketPrice +
        "<br>Total Amount: ₹" + total;
}
