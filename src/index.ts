import { Elysia } from "elysia";

const app = new Elysia()
  .get("/api/hero", () => {
    return Bun.file("data/hero/hero.json").json();
  })
  .get("/api/projects", () => {
    return Bun.file("data/projects/projects.json").json();
  })
  .get("/api/about", () => {
    return Bun.file("data/about/about.json").json();
  })
  .get("/api/contact", () => {
    return Bun.file("data/contact/contact.json").json();
  })
  .get("/public", () => {
    return Bun.file("public/index.html").text();
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);