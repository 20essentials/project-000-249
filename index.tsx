import { body, container, aro } from "./styles.css.ts";

document.body.className = body;

const containerEl = document.createElement("div");
containerEl.className = container;

for (let i = 1; i <= 18; i++) {
  const aroEl = document.createElement("div");
  aroEl.className = aro;
  aroEl.style.setProperty("--r", i.toString());
  aroEl.style.transform = `rotateX(90deg) rotateY(calc(360deg / 36 * ${i}))`;
  containerEl.appendChild(aroEl);
}

document.body.appendChild(containerEl);
