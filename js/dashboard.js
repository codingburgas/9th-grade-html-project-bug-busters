const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    window.location.href = "login.html";
}

else {
    document.getElementById("username").textContent = user.name;
}

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "login.html";
});
