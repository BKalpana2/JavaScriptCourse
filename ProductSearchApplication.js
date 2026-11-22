
let products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Headphones",
    "Monitor",
    "Printer"
];

function searchProduct() {

    let search = document.getElementById("search").value.toLowerCase();

    let result = document.getElementById("result");

    let output = "";

    let found = products.filter(function(product) {

        return product.toLowerCase().includes(search);

    });

    if (found.length > 0) {

        for (let product of found) {

            output += product + "<br>";

        }

        result.innerHTML = output;

    }
    else {

        result.innerHTML = "Product Not Found!";

    }
}
