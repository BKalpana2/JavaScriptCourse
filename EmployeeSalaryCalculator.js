
function calculateSalary() {

    let name = document.getElementById("name").value;

    let salary = Number(document.getElementById("salary").value);

    if (name === "" || salary <= 0) {
        alert("Please enter valid details");
        return;
    }

    let hra = salary * 20 / 100;

    let da = salary * 10 / 100;

    let total = salary + hra + da;

    document.getElementById("result").innerHTML =
        "Employee Name: " + name +
        "<br>Basic Salary: ₹" + salary +
        "<br>HRA: ₹" + hra +
        "<br>DA: ₹" + da +
        "<br>Total Salary: ₹" + total;
}
