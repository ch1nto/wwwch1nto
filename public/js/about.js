fetch("/api/about")
    .then(res => res.json())
    .then(data => {
        const content = document.getElementById("about-content");

        content.innerHTML = `
      <div class="fade-in">
        <p class="text-sm leading-relaxed text-zinc-500">${data.introduction.description}</p>
      </div>

      <div class="flex flex-col gap-16">
        <div class="fade-in" style="transition-delay: 0.1s">
          <p class="text-sm text-zinc-500 mb-6">Experience</p>
          ${data.experience.map(exp => `
            <div class="flex justify-between items-start border-t border-zinc-200 dark:border-zinc-800 py-4">
              <div>
                <p class="text-sm font-medium">${exp.company}</p>
                <p class="text-sm text-zinc-500">${exp.role}</p>
              </div>
              <span class="text-sm text-zinc-500">${exp.duration}</span>
            </div>
          `).join("")}
        </div>

        <div class="fade-in" style="transition-delay: 0.2s">
          <p class="text-sm text-zinc-500 mb-6">Awards</p>
          ${data.awards.map(award => `
            <div class="flex justify-between items-start border-t border-zinc-200 dark:border-zinc-800 py-4">
              <div>
                <p class="text-sm font-medium">${award.title}</p>
                <p class="text-sm text-zinc-500">${award.organization}</p>
              </div>
              <span class="text-sm text-zinc-500">${award.year}</span>
            </div>
          `).join("")}
        </div>

        <div class="fade-in" style="transition-delay: 0.3s">
          <p class="text-sm text-zinc-500 mb-6">Skills</p>
          <div class="flex gap-2 flex-wrap">
            ${data.skills.map(skill => `
              <span class="text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full">${skill}</span>
            `).join("")}
          </div>
        </div>
      </div>
    `;

        // trigger observer หลัง inject HTML
        content.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    });

// Marquee
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Elysia", "Bun", "Git", "Figma"];
const track = document.getElementById("marquee-track");
if (track) {
    const quadrupled = [...skills, ...skills, ...skills, ...skills];
    track.innerHTML = quadrupled.map(skill => `
    <span class="text-[0.625rem] text-zinc-400 px-2">• ${skill} •</span>
  `).join("");
}