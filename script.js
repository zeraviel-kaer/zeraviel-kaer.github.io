function showTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openProject(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  if (type === "bot") {
    body.innerHTML = `
      <h2>Discord Bot</h2>
      <p>Экономика, модерация, логирование, SQLite база.</p>
    `;
  }

  if (type === "roblox") {
    body.innerHTML = `
      <h2>Roblox System</h2>
      <p>Инвентарь + UI система + скрипты взаимодействия.</p>
    `;
  }

  if (type === "db") {
    body.innerHTML = `
      <h2>SQLite System</h2>
      <p>Система хранения данных пользователей и экономики.</p>
    `;
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
