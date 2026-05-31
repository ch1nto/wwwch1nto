fetch("/api/projects")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("projects-list");

        data.projects.forEach((project, index) => {
            list.innerHTML += `
        <div class="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 border-t border-zinc-200 dark:border-zinc-800 py-8 md:py-12 fade-in" style="transition-delay: ${index * 0.1}s">
          <div class="md:col-span-1">
            <span class="text-sm text-zinc-400">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="md:col-span-8">
            <p class="text-sm text-zinc-500 mb-3">${project.company} / ${project.duration}</p>
            <h3 class="text-xl font-medium mb-3">${project.title}</h3>
            <p class="text-sm text-zinc-500 mb-6">${project.description}</p>
            <div class="flex gap-2 flex-wrap">
              ${project.tags.map(tag => `
                <span class="text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full">${tag}</span>
              `).join("")}
            </div>
          </div>
          <div class="md:col-span-3 md:flex md:justify-end">
            <a href="${project.link}" target="_blank" class="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors">View →</a>
          </div>
        </div>
      `;
        });

        document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    });