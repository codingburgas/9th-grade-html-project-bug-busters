const form = document.getElementById("station-form");
const nameInput = document.getElementById("station-name");
const locationInput = document.getElementById("station-location");
const list = document.getElementById("station-list");

let stations = JSON.parse(localStorage.getItem("stations")) || [];
let editIndex = null;

renderStations();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const station = {
        name: nameInput.value,
        location: locationInput.value,
    };

    if (editIndex === null) {
        stations.push(station);
    } else {
        stations[editIndex] = station;
        editIndex = null;
    }

    localStorage.setItem("stations", JSON.stringify(stations));
    renderStations();
    form.reset();
});

function renderStations() {
    list.innerHTML = "";

    stations.forEach((station, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      ${station.name} (${station.location})
      <button onclick="editStation(${index})">Edit</button>
      <button onclick="deleteStation(${index})">Delete</button>
    `;
        list.appendChild(li);
    });
}

window.editStation = function (index) {
    const station = stations[index];
    nameInput.value = station.name;
    locationInput.value = station.location;
    editIndex = index;
};

window.deleteStation = function (index) {
    if (confirm("Are you sure you want to delete this station?")) {
        stations.splice(index, 1);
        localStorage.setItem("stations", JSON.stringify(stations));
        renderStations();
    }
};
