
function convert() {

    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").innerHTML =
        "Celsius: " + celsius + "°C" +
        "<br>Fahrenheit: " + fahrenheit + "°F";
}
