
let loading=document.getElementById("loading");
async function getData() {
    try {
        loading.innerText="Loading...."
        let api = "https://fakestoreapi.com/products";

        let res = await fetch(api);

        let out = await res.json();

        console.log(out);

        display(out);
    }
    catch (e) {
        alert("Something went wrong");
    }
    finally {
        loading.innerText="";
    }
}

function display(a) {

    let refElem = document.getElementById("ref");

    let cards = "";

    for (let i = 0; i < a.length; i++) {

        let item = a[i];

        cards += `
            <div class="card">
                <img src="${item.image}">
                <p>${item.title}</p>
                <h3>Price : RS. ${item.price}</h3>
                <h3>Category : ${item.category}</h3>
                <h3>Rate : ${item.rating.rate}</h3>
                <h3>Count : ${item.rating.count}</h3>
            </div>
        `;
    }

    refElem.innerHTML = cards;
}
