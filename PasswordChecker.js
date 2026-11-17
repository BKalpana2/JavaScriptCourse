
function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let correctUsername = "kalpana";

    let correctPassword = "12345";

    if (username === "" || password === "") {

        alert("Please enter username and password");

    }
    else if (username === correctUsername && password === correctPassword) {

        document.getElementById("result").innerHTML =
            "Login Successful! Welcome " + username;

    }
    else {

        document.getElementById("result").innerHTML =
            "Invalid Username or Password";

    }
}
