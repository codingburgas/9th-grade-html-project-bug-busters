
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const user = { name, email, password };

    
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    this.reset();
});


document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert("Login successful!");
        
        window.location.href = "index.html";
    } else {
        alert("Incorrect email or password.");
    }
});
