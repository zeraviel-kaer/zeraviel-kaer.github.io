// ─── PROJECT DATA ───
const projects = {
  bot: {
    emoji: '🤖',
    title: 'Discord Bot',
    body: 'Полнофункциональный Discord бот с системой экономики, командами модерации, автоматическим логированием событий и SQLite базой данных. Поддерживает команды слеша, кастомные роли и кулдауны.',
    tags: ['Python', 'Discord.py', 'SQLite', 'asyncio', 'Slash Commands']
  },
  roblox: {
    emoji: '🎮',
    title: 'Roblox System',
    body: 'Комплексная игровая система для Roblox: инвентарь, кастомный UI, скрипты взаимодействия с объектами мира. Реализовано на Luau с оптимизацией для большого числа игроков.',
    tags: ['Luau', 'Roblox Studio', 'UI/UX', 'OOP', 'Remote Events']
  },
  db: {
    emoji: '🗄',
    title: 'SQLite System',
    body: 'Надёжная асинхронная система хранения данных для ботов и приложений: пользовательские профили, история транзакций, параметры экономики с поддержкой миграций схемы.',
    tags: ['Python', 'SQLite', 'asyncio', 'aiosqlite', 'Migrations']
  }
};

// ─── MODAL ───
function openModal(type) {
  const p = projects[type];
  document.getElementById('m-emoji').textContent = p.emoji;
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-body').textContent = p.body;
  const tagsEl = document.getElementById('m-tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── TABS ───
function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ─── SMOOTH SCROLL ───
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }
}

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));