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

  // --- 4. Case studies a visitor has opened are marked "Seen" (kept in their browser) ---
  function initSeen() {
    var KEY = 'vv-seen';
    var seen = [];
    try { seen = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}

    var current = document.querySelector('[data-case-slug]');
    if (current) {
      var slug = current.getAttribute('data-case-slug');
      if (seen.indexOf(slug) === -1) {
        seen.push(slug);
        try { localStorage.setItem(KEY, JSON.stringify(seen)); } catch (e) {}
      }
    }

    document.querySelectorAll('.work-row[data-slug]').forEach(function (row) {
      row.classList.toggle('is-seen', seen.indexOf(row.getAttribute('data-slug')) !== -1);
    });
  }

  // --- 5. Director's commentary: subtitle-style asides, opt-in via CC ---
  function initCommentary() {
    var toggle = document.getElementById('cc-toggle');
    var caption = document.getElementById('cc-caption');
    if (!toggle || !caption) return;

    // Case studies: attach a line to each section heading by its text
    var map = document.getElementById('cc-headings');
    if (map) {
      var lines = {};
      try { lines = JSON.parse(map.textContent) || {}; } catch (e) {}
      document.querySelectorAll('.article-body h2').forEach(function (h) {
        var line = lines[h.textContent.trim()];
        if (line) h.setAttribute('data-commentary', line);
      });
    }

    var targets = Array.prototype.slice.call(document.querySelectorAll('[data-commentary]'))
      .filter(function (el) { return el.getAttribute('data-commentary'); });
    if (!targets.length) { toggle.hidden = true; return; }

    var on = false;
    var shown = null;
    var ticking = false;
    var swapTimer;
    try { on = localStorage.getItem('vv-cc') === 'on'; } catch (e) {}

    function pick() {
      // The last target whose top has crossed 42% of the viewport and is still on screen
      var line = window.innerHeight * 0.42, best = null;
      targets.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > window.innerHeight * 0.15) best = el;
      });
      return best;
    }

    function update() {
      ticking = false;
      if (!on) return;
      var el = pick();
      if (el === shown) return;
      shown = el;
      clearTimeout(swapTimer);
      caption.classList.add('is-swapping');
      swapTimer = setTimeout(function () {
        if (el) { caption.textContent = el.getAttribute('data-commentary'); caption.hidden = false; }
        else { caption.hidden = true; }
        caption.classList.remove('is-swapping');
      }, 250);
    }

    function set(state) {
      on = state;
      toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      toggle.querySelector('.cc-state').textContent = on ? 'on' : 'off';
      try { localStorage.setItem('vv-cc', on ? 'on' : 'off'); } catch (e) {}
      shown = null;
      if (on) { update(); } else { caption.hidden = true; }
    }

    toggle.addEventListener('click', function () { set(!on); });
    document.querySelectorAll('[data-cc-on]').forEach(function (b) {
      b.addEventListener('click', function () { set(true); });
    });
    window.addEventListener('scroll', function () {
      if (on && !ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    set(on);
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
    initSeen();
    initCommentary();
    initTheme();

    // Back/forward restores pages from memory without re-running scripts;
    // re-mark seen case studies whenever a page is shown, or another tab changes them.
    window.addEventListener('pageshow', function (e) { if (e.persisted) initSeen(); });
    window.addEventListener('storage', function (e) { if (e.key === 'vv-seen') initSeen(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
