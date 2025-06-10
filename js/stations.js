const form = document.getElementById("station-form");
const nameInput = document.getElementById("station-name");
const locationInput = document.getElementById("station-location");
const list = document.getElementById("station-list");


const stations = JSON.parse(localStorage.getItem("stations")) || [];
renderStations();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const station = {
        name: nameInput.value,
        location: locationInput.value,
    };

    stations.push(station);
    localStorage.setItem("stations", JSON.stringify(stations));
    renderStations();
    form.reset();
});

function renderStations() {
    list.innerHTML = "";
    stations.forEach((station, index) => {
        const li = document.createElement("li");
        li.textContent = `${station.name} (${station.location})`;
        list.appendChild(li);
    });
}
