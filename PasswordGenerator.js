
function generatePassword() {

    let length = Number(document.getElementById("length").value);

    if (length <= 0 || length > 20) {
        alert("Enter password length between 1 and 20");
        return;
    }

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for (let i = 0; i < length; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    document.getElementById("result").innerHTML =
        "Generated Password: " + password;
}
