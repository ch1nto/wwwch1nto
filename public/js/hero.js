fetch("/api/hero")
  .then(res => res.json())
  .then(data => {
    document.getElementById("hero-role").textContent = data.role;
    document.getElementById("hero-bio").textContent = data.bio;

    const nameEl = document.getElementById("hero-name");

    nameEl.innerHTML = data.name.map((word, i) => `
      <div style="overflow: hidden;">
        <span class="word-slide" style="display: block; transform: translateY(100%); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: ${0.1 + i * 0.15}s;">
          ${word}
        </span>
      </div>
    `).join("");

    setTimeout(() => {
      nameEl.querySelectorAll(".word-slide").forEach(el => {
        el.style.transform = "translateY(0)";
      });
    }, 50);

    document.querySelectorAll(".fade-in").forEach(el => {
      setTimeout(() => el.classList.add("visible"), 100);
    });
  });