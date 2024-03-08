var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Assuming you have an API endpoint for fetching facility data
fetch('/api/facilities')
    .then(response => response.json())
    .then(data => {
        data.forEach(facility => {
            var marker = L.marker([facility.latitude, facility.longitude]).addTo(map);
            marker.bindPopup(`<b>${facility.name}</b><br>Address: ${facility.address}`).openPopup();
        });
    });