const user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {
    const welcome = document.getElementById("welcome-message");
    if (welcome) {
        welcome.textContent = `Welcome, ${user.fullName}!`;
    }
}

const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
}
