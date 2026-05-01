function updateCountdown() {
    const now = new Date();
    let year = now.getFullYear();

    let birthday = new Date(year, 6, 4); // July = month 6 (0-based)

    if (now > birthday) {
        birthday = new Date(year + 1, 6, 4);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
