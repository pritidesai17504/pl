
function validatePassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        message.textContent = "Password is valid!";
        message.style.color = "green";
    } else {
        message.textContent = "Password is not valid!";
        message.style.color = "red";
    }
}
