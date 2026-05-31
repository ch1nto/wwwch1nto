const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// default dark
html.classList.add("dark");

themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    themeToggle.textContent = html.classList.contains("dark") ? "◐ Light" : "◐ Dark";
});

// Scroll animation
var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});