const incidents = JSON.parse(localStorage.getItem("incidents")) || [];

const map = L.map('map').setView([42.6977, 23.3219], 7); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

incidents.forEach(incident => {
    if (!incident.location) return;

    const fakeCoords = getFakeCoords(incident.location);

    const marker = L.marker(fakeCoords).addTo(map);
    marker.bindPopup(`
    <b>${incident.type}</b><br>
    ${incident.location}<br>
    ${incident.time}<br>
    Status: ${incident.status}
  `);
});

function getFakeCoords(location) {
    const hash = location.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const lat = 42 + (hash % 100) * 0.01;
    const lng = 23 + (hash % 100) * 0.01;
    return [lat, lng];
}
