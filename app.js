// ── PAF Design Guide — app.js ──────────────────────────

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Render all panels from DATA ──────────────────────
  const content = document.getElementById('content');
  if (content && window.PANELS) {
    Object.keys(window.PANELS).forEach(function (key) {
      const div = document.createElement('div');
      div.id = 'panel-' + key;
      div.className = 'panel' + (key === 'home' ? ' active' : '');
      div.innerHTML = window.PANELS[key];
      content.appendChild(div);
    });
  }

  // ── 2. Sidebar navigation ───────────────────────────────
  const sidebarBtns = document.querySelectorAll('.sidebar-btn');

  sidebarBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const panelId = btn.getAttribute('data-panel');
      showPanel(panelId);
    });
  });

  function showPanel(id) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(function (p) {
      p.classList.remove('active');
    });
    // Deactivate all sidebar btns
    sidebarBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    // Show target panel
    const target = document.getElementById('panel-' + id);
    if (target) target.classList.add('active');
    // Activate sidebar btn
    const activeBtn = document.querySelector('.sidebar-btn[data-panel="' + id + '"]');
    if (activeBtn) activeBtn.classList.add('active');
    // Scroll content to top
    const contentEl = document.getElementById('content');
    if (contentEl) contentEl.scrollTop = 0;
  }

  // Make showPanel global (used by home-card clicks)
  window.showPanel = showPanel;

  // ── 3. Tab switching inside panels ─────────────────────
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const panel = btn.closest('.panel');
    if (!panel) return;

    const prefix = btn.getAttribute('data-prefix');
    const target = btn.getAttribute('data-tab');

    // Deactivate all tabs in this panel
    panel.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    panel.querySelectorAll('.tab-panel').forEach(function (p) {
      p.classList.remove('active');
    });

    btn.classList.add('active');
    const tabEl = document.getElementById(prefix + '-' + target);
    if (tabEl) tabEl.classList.add('active');
  });

  // ── 4. Brief accordion ──────────────────────────────────
  document.addEventListener('click', function (e) {
    const cat = e.target.closest('.brief-cat');
    if (!cat) return;
    cat.classList.toggle('open');
    const questions = cat.nextElementSibling;
    if (questions) questions.classList.toggle('open');
  });

  // ── 5. Home cards ───────────────────────────────────────
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.home-card');
    if (!card) return;
    const target = card.getAttribute('data-target');
    if (target) showPanel(target);
  });

});
