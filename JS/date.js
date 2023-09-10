const currentDateElement = document.getElementById("current-date");

function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const formattedDate = now.toLocaleDateString("ro-RO", options);
    currentDateElement.textContent = formattedDate;
}

updateCurrentDate();

setInterval(updateCurrentDate, 1000);
