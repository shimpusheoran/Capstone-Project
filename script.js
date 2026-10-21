const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
}