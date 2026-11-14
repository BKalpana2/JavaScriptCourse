
function calculate() {

    let name = document.getElementById("name").value;

    let java = Number(document.getElementById("java").value);
    let html = Number(document.getElementById("html").value);
    let sql = Number(document.getElementById("sql").value);

    let total = java + html + sql;

    let average = total / 3;

    let result;

    if (java >= 35 && html >= 35 && sql >= 35) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Student Name: " + name +
        "<br>Total Marks: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Result: " + result;
}
