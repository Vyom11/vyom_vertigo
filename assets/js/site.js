/**
 * Vyom Vertigo — small vanilla enhancements.
 * The site is fully readable without JS; everything here is a flourish.
 */

(function () {
  'use strict';

  var root = document.documentElement;

  // --- 1. Reading progress (essays and case studies) ---
  function initProgress() {
    var bar = document.querySelector('.read-progress span');
    if (!bar) return;
    var ticking = false;

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.setProperty('--progress', p.toFixed(4));
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // --- 2. Top 4 posters: tap or click to pin the line open ---
  function initPosters() {
    var buttons = document.querySelectorAll('.poster-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        buttons.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  }

  // --- 6. Theme toggle: dark by default, the choice is remembered in this browser ---
  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var meta = document.querySelector('meta[name="theme-color"]');

    function apply(theme) {
      root.setAttribute('data-theme', theme);
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      if (meta) meta.setAttribute('content', theme === 'light' ? '#E4E2D7' : '#111111');
    }

    apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem('vv-theme', next); } catch (e) {}
    });
  }

  function init() {
    initProgress();
    initPosters();
    initTheme();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
