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

  // --- 3. Writing archive filter ---
  function initWritingFilter() {
    var archive = document.getElementById('essay-archive');
    var filterButtons = document.querySelectorAll('.filter-btn');
    var status = document.getElementById('filter-status');
    if (!archive || !filterButtons.length) return;
    var items = archive.querySelectorAll('[data-category]');

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-filter');
        var shown = 0;
        filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        items.forEach(function (item) {
          var match = category === 'all' || item.getAttribute('data-category') === category;
          item.hidden = !match;
          if (match) shown++;
        });
        if (status) status.textContent = 'Showing ' + shown + ' essay' + (shown === 1 ? '' : 's') + '.';
      });
    });
  }

  // --- 4. Ticket stubs: case studies a visitor has opened, kept in their browser ---
  function initStubs() {
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

    document.querySelectorAll('[data-stubs]').forEach(function (box) {
      var count = 0;
      box.querySelectorAll('.stub').forEach(function (stub) {
        var torn = seen.indexOf(stub.getAttribute('data-stub')) !== -1;
        stub.classList.toggle('is-torn', torn);
        if (torn) count++;
      });
      box.querySelector('[data-stubs-count]').textContent = count;
      box.querySelector('.stubs-full').hidden = count < parseInt(box.getAttribute('data-total'), 10);
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

  // --- 6. Projector dust: a few specks drifting through the beam ---
  function initDust() {
    var canvas = document.querySelector('.projector-dust');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, specks = [], last = 0, raf = 0;

    // The beam is a cone: narrow at the top centre, wide at the bottom (matches the CSS clip-path)
    function coneX(t) {
      var left = 0.45 + (0.06 - 0.45) * t, right = 0.55 + (0.94 - 0.55) * t;
      return [left * w, right * w];
    }
    function spawn(anywhere) {
      var t = Math.pow(Math.random(), 1.6) * 0.85;
      var span = coneX(t);
      return {
        x: span[0] + Math.random() * (span[1] - span[0]),
        y: anywhere ? t * h : -4,
        r: 0.5 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.12,
        vy: 0.04 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2
      };
    }
    function size() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(70, Math.max(24, (w * h) / 26000)));
      specks = [];
      for (var i = 0; i < count; i++) specks.push(spawn(true));
    }
    function draw(time) {
      ctx.clearRect(0, 0, w, h);
      specks.forEach(function (p, i) {
        if (!still) {
          p.x += p.vx; p.y += p.vy;
          var t = p.y / h, span = coneX(Math.min(t, 1));
          if (t > 0.85 || p.x < span[0] - 20 || p.x > span[1] + 20) specks[i] = p = spawn(false);
        }
        var depth = 1 - Math.min(p.y / (h * 0.85), 1);          // brighter near the lens
        var twinkle = 0.6 + 0.4 * Math.sin(time / 900 + p.phase); // catching the light
        ctx.globalAlpha = 0.38 * depth * twinkle;
        ctx.fillStyle = '#FFD49A';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
    }
    function loop(time) {
      raf = window.requestAnimationFrame(loop);
      if (time - last < 33) return; // ~30fps is plenty for dust
      last = time;
      draw(time);
    }

    size();
    window.addEventListener('resize', function () { size(); if (still) draw(0); });
    if (still) { draw(0); return; }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { window.cancelAnimationFrame(raf); }
      else { raf = window.requestAnimationFrame(loop); }
    });
    raf = window.requestAnimationFrame(loop);
  }

  // The talents beside the headline: write them in one by one, hold the full list, then start again
  function initRevisions() {
    var list = document.querySelector('[data-revisions]');
    if (!list || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var items = Array.prototype.slice.call(list.querySelectorAll('.rev-item'));
    function later(fn, ms) { window.setTimeout(function () { if (document.hidden) { later(fn, 500); } else { fn(); } }, ms); }
    function reset() {
      list.classList.remove('is-fading');
      items.forEach(function (li) { li.classList.remove('is-written'); });
    }
    function write(i) {
      items[i].classList.add('is-written');
      if (i < items.length - 1) { later(function () { write(i + 1); }, 850); }
      else { later(fade, 6000); }
    }
    function fade() {
      list.classList.add('is-fading');
      later(function () { reset(); later(function () { write(0); }, 500); }, 700);
    }
    reset();
    later(function () { write(0); }, 600);
  }

  function init() {
    initProgress();
    initPosters();
    initWritingFilter();
    initStubs();
    initCommentary();
    initDust();
    initRevisions();

    // Back/forward restores pages from memory without re-running scripts;
    // recount the stubs whenever a page is shown, or another tab changes them.
    window.addEventListener('pageshow', function (e) { if (e.persisted) initStubs(); });
    window.addEventListener('storage', function (e) { if (e.key === 'vv-seen') initStubs(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
