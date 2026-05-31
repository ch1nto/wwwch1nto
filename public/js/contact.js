fetch("/api/contact")
    .then(res => res.json())
    .then(data => {
        const content = document.getElementById("contact-content");

        content.innerHTML = `
      <div class="mb-24">
        <a href="mailto:${data.email}" class="contact-headline hover:opacity-60 transition-opacity inline-block">Say hi! <span>↗</span></a>
      </div>

      <div class="flex justify-between items-end flex-wrap gap-8">
        <div>
          <p class="text-sm text-zinc-500">${data.email}</p>
          <p class="text-sm text-zinc-500">${data.City}</p>
        </div>
        <div class="flex gap-8">
          ${data.social.map(s => `
            <a href="${s.url}" target="_blank" class="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest">${s.platform}</a>
          `).join("")}
        </div>
      </div>
    `;

        content.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    });