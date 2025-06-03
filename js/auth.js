document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.email === email);

    if (userExists) {
        alert("User with this email already exists.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    this.reset();
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (matchedUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect email or password.");
    }
});
