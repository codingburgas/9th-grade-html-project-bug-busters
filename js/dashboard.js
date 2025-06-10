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


document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "login.html";
});

const darkModeBtn = document.getElementById("dark-mode-btn");

if (localStorage.getItem("darkMode") === "enabled") {       // checks if dark mode was previously enabled, getting the data from localStorage
    document.body.classList.add("dark-mode");               // adds "dark-mode" as a class, attaching it to the body tag,
                                                            // affecting the child elements (i.e. the elements inside) of the body
    darkModeBtn.textContent = "Switch to Light Mode";       // changes the text of the button
}

darkModeBtn.addEventListener("click", () => {               // when the button is clicked, it runs the handler below (i.e. a function), reacting to the click event
    document.body.classList.toggle("dark-mode");            // if the body doesn't have the "dark-mode" class, clicking the button will add it,
                                                            // else clicking the button will get it removed, and can be readded again

    if (document.body.classList.contains("dark-mode")) {    // given the fact that we know what body.classList does, this one is simple to understand
        localStorage.setItem("darkMode", "enabled");        // lets the program remember that darkmode is enabled when the page closes
        darkModeBtn.textContent = "Switch to Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");       // lets the program remember that lightmode is enabled when the page closes
        darkModeBtn.textContent = "Switch to Dark Mode";
    }
});

