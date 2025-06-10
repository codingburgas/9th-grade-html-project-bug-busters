function rgb(r, g, b)
{
    return `rgb(${r}, ${g}, ${b})`; // introduces the rgb color function to javascript
}

// a Promise() in javascript is a value that may be available now, later or never, it's 3 states being: pending (default), fulfilled or rejected
// when resolve() is called after the delay, it signals that the waiting period is fulfilled, acting like "break;" in loops and switch cases

// setTimeout() is a built-in function that delays the block of code/function for a specified number of milliseconds,
// setTimeout() expects a function reference as its first argument, calling that function later, after the specified time (ms),
// but resolve() is a function that gets called (because of the brackets "()"), not a reference
// so, if we write setTimeout(resolve(), ms), then resolve() gets called immediately instead of passing it as a reference,
// so it's better to write it as setTimeout(resolve, ms), resolve without the "()" now being a reference,
// also now acting as a return statement to function runTimer(resolve), without returning data

// replacing function runTimer(resolve) with setTimeout(resolve, ms) doesn't work,
// since setTimeout() gets passed as an argument (something that the Promise() constructor function will use instead of run)

// expanded version:
/*function sleep(ms)
{ 
    return new Promise(function runTimer(resolve)
    {
        setTimeout(resolve, ms);
    });
}*/

// simplified version (the arrow function inside Promise() passes resolve to setTimeout, letting setTimeout execute resolve after the specified time):
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("register-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.email === email);

    if (userExists) {
        document.getElementById("register-message").innerHTML = "User with this email already exists. Please try again with a different email.";
        await sleep(8000); // waits for 8 seconds, await is added since await is the command that pauses execution,
                            // the function must have async before it for await to run
                            // await must be in a function that has async before the function declaration, else await won't work
        document.getElementById("register-message").innerHTML = "";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    this.reset();
});

document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (matchedUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        document.getElementById("login-message").style.color = rgb(25, 144, 25);
        document.getElementById("login-message").innerHTML = "Login successful! Please wait for 9 seconds until we send you to the dashboard...";
        await sleep(9000);
        document.getElementById("login-message").innerHTML = "";
        document.getElementById("login-message").style.color = rgb(228, 47, 67);
        window.location.href = "index.html";
    } else {
        document.getElementById("login-message").innerHTML = "Incorrect email or password. Please try again with a different email or password.";
        await sleep(8000);
        document.getElementById("login-message").innerHTML = "";
    }
});