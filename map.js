document.addEventListener('DOMContentLoaded', (event) => {
    const map = L.map('map').setView([21.9162, 95.9560], 6); // Centered on Myanmar

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    regions.forEach(region => {
        const marker = L.marker([region.lat, region.lng]).addTo(map);
        marker.bindPopup(`<b>${region.name}</b><br>${region.info}`);
    });
});
