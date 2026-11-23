
let contacts = [];

function addContact() {

    let name = document.getElementById("name").value;

    let mobile = document.getElementById("mobile").value;

    if (name === "" || mobile.length !== 10) {
        alert("Please enter valid details");
        return;
    }

    let contact = {
        name: name,
        mobile: mobile
    };

    contacts.push(contact);

    displayContacts();

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
}

function displayContacts() {

    let output = "";

    for (let i = 0; i < contacts.length; i++) {

        output +=
            contacts[i].name + " - " +
            contacts[i].mobile +
            " <button onclick='deleteContact(" + i + ")'>Delete</button><br><br>";
    }

    document.getElementById("result").innerHTML = output;
}

function deleteContact(index) {

    contacts.splice(index, 1);

    displayContacts();
}
