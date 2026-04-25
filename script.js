console.log(
  "%cНАШЁЛ КОНСОЛЬ — +10 К IQ",
  "font-size: 32px; font-weight: 800; color: #a855f7; text-shadow: 0 0 10px rgba(168,85,247,0.6);"
);

// ─── PROJECT DATA ───
const projects = {
  bot: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#9B5DE5" d="M297.688 21.063c-15.634.137-31.488 4.074-46.657 12.343c34.997-2.542 65.762 8.182 74.345 33.938c-128.86-16.852-260.25 113.34-31.72 245.187c62.006 35.773 19.38 127.795-104.31 75.095C24.494 317.39 36.47 186.86 95.844 118.562c7.322 12.328 13.418 26.194 18.936 40.75c19.067-48.595 56.388-68.62 93.595-88.812c-52.197-24.58-102.01-14.783-150.906 8.406c10.362 5.744 19.104 13.503 26.655 22.72c-113.558 67.915-77.773 280.4 71.406 366.53c189.853 109.61 414.786-132.238 208.157-211.062c-151.438-57.77-111.705-139.905-38.03-126.156l2.624 42.625l141.345 39.375l20.906-60.657c-28.94-12.513-52.207-26.577-71.092-43.843c1.268-28.244-10.66-56.505-33.907-84.75c.757 13.793.603 27.582-1.592 41.376c-22.21-28.084-53.733-44.287-86.25-44zm43.437 65.374c23 7.268 44.722 20.866 62 44.094c-33.73 15.82-69.124-5.32-62-44.093z"/></svg>`,

    title: "Horizon Paws",
    subtitle: "Обновлено: 25.04.2026",

    content: [
      {
        type: "text",
        label: "О проекте",
        value:
          "Discord-сервер, основанный 24 августа 2025 года, создан как пространство для фурри-сообщества и одновременно как площадка для экспериментов. Здесь я экспериментирую с форматами, механиками и концепциями, превращая их в работающие системы. "
      },
      {
        type: "text",
        label: "Бот",
        value:
          "Для сервера также разработан отдельный Discord-бот с закрытым исходным кодом, полностью интегрированный в его работу и обеспечивающий ключевой функционал. При необходимости доступ к коду может быть предоставлен по запросу (для организаций или проверенных партнёров)."
      },
      {
        type: "gallery",
        label: "Галерея",
        items: [
          "media/HorizonPaws/banner.png",
        ]
      },
      {
        type: "tags",
        label: "Теги",
        items: ["Discord"]
      },
      {
        type: "links",
        label: "Ссылки",
        items: [
          { label: "Зайти к нам на сервер <3", href: "https://discord.gg/BhKUsXEqHT", primary: true }
        ]
      }
    ]
  },

  roblox: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9B5DE5" d="M18.926 23.998L0 18.892L5.075.002L24 5.108ZM15.348 10.09l-5.282-1.453l-1.414 5.273l5.282 1.453z"/></svg>`,
    title: "Etherpaw Studio",
    subtitle: "Обновлено: 25.04.2026",

    content: [
      {
        type: "text",
        label: "Описание",
        value: "Моя студия на платформе роблокса, где с помощью Roblox Studio и их языка Luau (от Lua) мы с командой делаем интересные игры!"
      },
      {
        type: "tags",
        label: "Теги",
        items: ["Roblox"]
      },
      {
        type: "links",
        label: "Ссылки",
        items: [
          { label: "Перейти в группу", href: "https://www.roblox.com/share/g/34170513", primary: true }
        ]
      }
    ]
  },

  db: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9B5DE5" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 4v4h4v2H8v6h2v-2h4v2h2v-6h-2v-2h4V6h-4v4h-4V6z"/></svg>`,
    title: "Minecraft сервер",
    subtitle: "Обновлено: 25.04.2026",

    content: [
      {
        type: "text",
        label: "Описание",
        value: "Наш майнкрафт сервер, который создан специально для участников нашего дискорд сервера Horizon Paws (для полной информации и сборках можно узнать на нашем дискорд сервере)."
      },
      {
        type: "tags",
        label: "Теги",
        items: ["Minecraft"]
      }
    ]
  }
};

// ─── LIGHTBOX ───
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// ─── BLOCK RENDER ───
function renderBlock(block) {
  switch (block.type) {

    case "text":
      return `
        <div class="modal-section">
          <div class="modal-section-label">${block.label || ""}</div>
          <div class="modal-body">${block.value}</div>
        </div>
      `;

    case "gallery":
      return `
        <div class="modal-section">
          <div class="modal-section-label">${block.label || "Галерея"}</div>
          <div class="modal-gallery">
            ${block.items.map(i => {
              if (i.startsWith("http") || i.includes("media")) {
                return `<img src="${i}" onclick="openLightbox('${i}')">`;
              }
              return `<div class="modal-gallery-item">${i}</div>`;
            }).join("")}
          </div>
        </div>
      `;

    case "tags":
      return `
        <div class="modal-section">
          <div class="modal-section-label">${block.label || "Стек"}</div>
          <div class="modal-tags">
            ${block.items.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;

    case "links":
      return `
        <div class="modal-section">
          <div class="modal-section-label">${block.label || "Ссылки"}</div>
          <div class="modal-links">
            ${block.items.map(l => `
              <a class="modal-link ${l.primary ? "primary" : ""}" href="${l.href}" target="_blank">
                ${l.label}
              </a>
            `).join("")}
          </div>
        </div>
      `;
  }
}

// ─── MODAL ───
function openModal(type) {
  const p = projects[type];

  document.getElementById("modal-body-inner").innerHTML = `
    <div class="modal-header">
      <div class="modal-emoji">${p.icon}</div>
      <div class="modal-titles">
        <div class="modal-title">${p.title}</div>
        <div class="modal-subtitle">${p.subtitle}</div>
      </div>
    </div>

    ${p.content.map(renderBlock).join("")}
  `;

  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

// ─── TABS ───
function switchTab(id, btn) {
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

// ─── SCROLL ───
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  }
}

// ─── ANIMATION ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// ─── KEYBOARD ───
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});