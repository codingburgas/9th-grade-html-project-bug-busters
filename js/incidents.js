const form = document.getElementById("incident-form");
const list = document.getElementById("incident-list");

const typeInput = document.getElementById("incident-type");
const locationInput = document.getElementById("incident-location");
const timeInput = document.getElementById("incident-time");
const statusInput = document.getElementById("incident-status");

let incidents = JSON.parse(localStorage.getItem("incidents")) || [];

renderIncidents();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const incident = {
        type: typeInput.value,
        location: locationInput.value,
        time: timeInput.value,
        status: statusInput.value,
    };

    incidents.push(incident);
    localStorage.setItem("incidents", JSON.stringify(incidents));
    renderIncidents();
    form.reset();
});

function renderIncidents() {
    list.innerHTML = "";
    incidents.forEach((incident, index) => {
        const li = document.createElement("li");
        li.textContent = `${incident.type} at ${incident.location} on ${incident.time} [${incident.status}]`;
        list.appendChild(li);
    });
}
