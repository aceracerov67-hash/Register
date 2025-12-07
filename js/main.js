

const message = document.getElementById("message");
const button = document.getElementById("btn");

button.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const realEmail = "farzona@gmail.com";
    const realPassword = "2104";

    if (email === realEmail && password === realPassword) {
        message.innerHTML = "Login successful!";
        message.style.color = "green";
    } else {
        message.innerHTML = "Invalid email or password.";
        message.style.color = "red";
    }
});
