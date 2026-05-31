import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .use(staticPlugin({ assets: "public", prefix: "" }))
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
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);