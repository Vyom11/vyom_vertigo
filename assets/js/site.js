/**
 * Vyom Vertigo — Minimal Vanilla JS
 * Handles Theme Toggle (Light <-> Dark) and Writing Category Filters.
 * Pure progressive enhancement: site is 100% readable with JS disabled.
 */

(function () {
  'use strict';

  // --- 1. Theme Toggle (Light <-> Dark) ---
  function initTheme() {
    var toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    function getTheme() {
      return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('vv-theme', theme);
      } catch (err) {
        // LocalStorage disabled or restricted
      }
      toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }

    // Set initial aria-pressed state based on current theme
    var currentTheme = getTheme();
    toggleBtn.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');

    toggleBtn.addEventListener('click', function () {
      var nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  // --- 2. Writing Category Filter ---
  function initWritingFilter() {
    var filterButtons = document.querySelectorAll('.filter-btn');
    var postCards = document.querySelectorAll('.post-card-item');

    if (!filterButtons.length || !postCards.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-filter');

        // Update active state on buttons
        filterButtons.forEach(function (b) {
          b.setAttribute('aria-pressed', 'false');
          b.classList.remove('active');
        });
        btn.setAttribute('aria-pressed', 'true');
        btn.classList.add('active');

        // Filter cards
        postCards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
            card.removeAttribute('hidden');
          } else {
            card.style.display = 'none';
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initTheme();
      initWritingFilter();
    });
  } else {
    initTheme();
    initWritingFilter();
  }
})();

