---
layout: default
title: Portfolio
permalink: /portfolio/
description: "A small collection of things I’ve made while trying to figure out how my brain works. Essays, videos, questionable reviews, and the occasional thought that probably should’ve stayed in my head. All in one place."
---

<!-- Portfolio Header -->
<header class="py-10 border-b border-brandBorder mb-10 text-center flex flex-col items-center">
  <span class="font-retroSans text-[10px] tracking-[0.25em] text-brandRed uppercase mb-3">CURATED PORTFOLIO</span>
  <h1 class="font-display text-4xl sm:text-5xl md:text-7xl text-brandWhite font-normal tracking-tight leading-none mb-4">
    Selected Works
  </h1>
  <p class="font-serif italic text-lg sm:text-xl text-brandMuted max-w-xl leading-relaxed">
    A curated collection of essays, cultural critiques, and analytical articles exploring the patterns in stories and systems.
  </p>
  <div class="text-brandYellow text-xs select-none mt-2">✦</div>
</header>

<div class="space-y-16">
  <!-- Category 1: Film -->
  <!-- Category 1: Film -->
  <details class="group select-none" open>
    <!-- Category Header Border -->
    <summary class="w-full border-t border-b border-brandBorder/60 py-3 mb-8 flex justify-between items-center text-[10px] font-retroSans tracking-[0.2em] text-brandYellow uppercase cursor-pointer hover:text-brandWhite transition-colors duration-300 list-none [&::-webkit-details-marker]:hidden">
      <div class="flex items-center gap-3">
        <span class="text-brandMuted group-open:rotate-90 transition-transform duration-300 text-[8px] transform origin-center">▶</span>
        <span>Section 01</span>
        <span class="text-brandMuted border-l border-brandBorder/60 pl-3">Film & Media Critiques</span>
      </div>
      <span class="text-brandRed group-open:scale-110 transition-transform duration-300">❦</span>
    </summary>
    
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      {% assign film_posts = site.posts | where: "category", "film" %}
      {% for post in film_posts %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm animate-fade-in">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5 rounded-sm">
              {{ post.category }}
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light text-justify">
            {% if post.subtitle %}
              {{ post.subtitle }}
            {% else %}
              {{ post.excerpt | strip_html | strip_newlines | truncate: 160 }}
            {% endif %}
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>SOURCE: VYOM VERTIGO</span>
          <a href="{{ post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </details>

  <!-- Category 2: Thoughts -->
  <details class="group select-none" open>
    <!-- Category Header Border -->
    <summary class="w-full border-t border-b border-brandBorder/60 py-3 mb-8 flex justify-between items-center text-[10px] font-retroSans tracking-[0.2em] text-brandYellow uppercase cursor-pointer hover:text-brandWhite transition-colors duration-300 list-none [&::-webkit-details-marker]:hidden">
      <div class="flex items-center gap-3">
        <span class="text-brandMuted group-open:rotate-90 transition-transform duration-300 text-[8px] transform origin-center">▶</span>
        <span>Section 02</span>
        <span class="text-brandMuted border-l border-brandBorder/60 pl-3">Thoughts & General Ideas</span>
      </div>
      <span class="text-brandRed group-open:scale-110 transition-transform duration-300">❦</span>
    </summary>
    
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      {% assign thoughts_posts = site.posts | where: "category", "thoughts" %}
      {% for post in thoughts_posts %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm animate-fade-in">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5 rounded-sm">
              {{ post.category }}
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light text-justify">
            {% if post.subtitle %}
              {{ post.subtitle }}
            {% else %}
              {{ post.excerpt | strip_html | strip_newlines | truncate: 160 }}
            {% endif %}
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>SOURCE: VYOM VERTIGO</span>
          <a href="{{ post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </details>

  <!-- Section 03: Channel Portals -->
  <section class="pt-8 border-t border-brandBorder/40">
    <div class="w-full border-t border-b border-brandBorder/60 py-2.5 mb-8 flex justify-between items-center text-[10px] font-retroSans tracking-[0.2em] text-brandYellow uppercase">
      <span>Section 03</span>
      <span>Social Projections</span>
      <span class="text-brandRed">❦</span>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Instagram Portal Card -->
      <div class="bg-charcoalDark/40 border border-brandBorder hover:border-brandYellow/40 rounded p-6 flex flex-col justify-between h-full group transition-all duration-300 relative shadow-md">
        <div>
          <!-- Header -->
          <div class="flex justify-between items-center mb-4 border-b border-brandBorder pb-2">
            <span class="text-[9px] font-retroSans tracking-widest text-brandRed uppercase">INSTAGRAM</span>
            <span class="font-mono text-[9px] text-brandMuted">@vyom_vertigo</span>
          </div>
          
          <h3 class="font-display text-xl text-brandWhite mb-3 font-semibold tracking-tight group-hover:text-brandYellow transition-colors duration-300">
            VISUAL SNIPPETS & WRITING LOGS
          </h3>
          
          <!-- Mock Film Negative/Polaroid Strip -->
          <div class="my-4 bg-brandDark p-3 rounded border border-brandBorder/60 flex items-center justify-between gap-2 overflow-hidden select-none">
            <div class="w-1/3 aspect-square bg-charcoalLight border border-brandBorder/80 rounded-sm relative flex flex-col items-center justify-center">
              <span class="font-mono text-[7px] text-brandMuted">FRAME_01</span>
              <div class="w-4 h-4 rounded-full border border-brandRed/30 flex items-center justify-center mt-1">
                <span class="text-brandRed text-[6px]">❦</span>
              </div>
            </div>
            <div class="w-1/3 aspect-square bg-charcoalLight border border-brandBorder/80 rounded-sm relative flex flex-col items-center justify-center">
              <span class="font-mono text-[7px] text-brandMuted">FRAME_02</span>
              <div class="w-4 h-4 rounded-full border border-brandYellow/30 flex items-center justify-center mt-1">
                <span class="text-brandYellow text-[6px]">✦</span>
              </div>
            </div>
            <div class="w-1/3 aspect-square bg-charcoalLight border border-brandBorder/80 rounded-sm relative flex flex-col items-center justify-center">
              <span class="font-mono text-[7px] text-brandMuted">FRAME_03</span>
              <div class="w-4 h-4 rounded-full border border-brandOrange/30 flex items-center justify-center mt-1">
                <span class="text-brandOrange text-[6px]">⚜</span>
              </div>
            </div>
          </div>
          
          <p class="font-sans text-xs text-brandMuted leading-relaxed font-light">
            Behind-the-scenes thoughts, visual stories, design aesthetics, and short snippets of works-in-progress.
          </p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>FEED CHANNEL</span>
          <a href="{{ site.instagram_url }}" target="_blank" rel="noopener noreferrer" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>VIEW GALLERY</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>

      <!-- YouTube Portal Card -->
      <div class="bg-charcoalDark/40 border border-brandBorder hover:border-brandYellow/40 rounded p-6 flex flex-col justify-between h-full group transition-all duration-300 relative shadow-md">
        <div>
          <!-- Header -->
          <div class="flex justify-between items-center mb-4 border-b border-brandBorder pb-2">
            <span class="text-[9px] font-retroSans tracking-widest text-brandRed uppercase">YOUTUBE</span>
            <span class="font-mono text-[9px] text-brandMuted">@VyomVertigo</span>
          </div>
          
          <h3 class="font-display text-xl text-brandWhite mb-3 font-semibold tracking-tight group-hover:text-brandYellow transition-colors duration-300">
            CINEMATIC VIDEO ESSAYS
          </h3>
          
          <!-- Mock YouTube Video Player -->
          <div class="my-4 bg-brandDark border border-brandBorder/60 rounded-sm relative overflow-hidden group/player aspect-[16/9] flex flex-col justify-end p-2 select-none">
            <!-- Semi-transparent overlay with a retro play symbol -->
            <div class="absolute inset-0 bg-charcoal/40 flex items-center justify-center transition-colors duration-300 group-hover/player:bg-charcoal/20">
              <div class="w-10 h-10 rounded-full bg-brandRed/90 group-hover/player:bg-brandRed group-hover/player:scale-110 flex items-center justify-center transition-all duration-300 shadow">
                <!-- Play triangle icon -->
                <svg class="w-4 h-4 text-brandWhite fill-current translate-x-[1px]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <!-- Progress bar -->
            <div class="w-full bg-charcoalLight/60 h-1 rounded-full relative z-10 overflow-hidden">
              <div class="bg-brandRed h-full w-[68%]"></div>
            </div>
            <!-- Subtitles/Control strip -->
            <div class="flex justify-between items-center text-[7px] font-mono text-brandMuted mt-1 relative z-10">
              <span>08:42 / 12:54</span>
              <span>HD [•••]</span>
            </div>
          </div>
          
          <p class="font-sans text-xs text-brandMuted leading-relaxed font-light">
            In-depth breakdowns of screenplay structures, director styles, and essays on modern visual media.
          </p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>VIDEO ESSAYS</span>
          <a href="{{ site.youtube_url }}" target="_blank" rel="noopener noreferrer" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>TUNE IN</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>

      <!-- Letterboxd Portal Card -->
      <div class="bg-charcoalDark/40 border border-brandBorder hover:border-brandYellow/40 rounded p-6 flex flex-col justify-between h-full group transition-all duration-300 relative shadow-md">
        <div>
          <!-- Header -->
          <div class="flex justify-between items-center mb-4 border-b border-brandBorder pb-2">
            <span class="text-[9px] font-retroSans tracking-widest text-brandRed uppercase">LETTERBOXD</span>
            <span class="font-mono text-[9px] text-brandMuted">3LL6R</span>
          </div>
          
          <h3 class="font-display text-xl text-brandWhite mb-3 font-semibold tracking-tight group-hover:text-brandYellow transition-colors duration-300">
            FILM LOGS & DIARY REVIEWS
          </h3>
          
          <!-- Mock Review List -->
          <div class="my-4 bg-brandDark p-3 rounded border border-brandBorder/60 flex flex-col gap-2 font-serif text-[11px] leading-tight select-none">
            <div class="flex justify-between items-center border-b border-brandBorder pb-1.5">
              <span class="text-brandWhite truncate max-w-[100px]">The Godfather</span>
              <span class="text-brandYellow font-mono text-[9px] font-semibold">★★★★★</span>
            </div>
            <div class="flex justify-between items-center border-b border-brandBorder pb-1.5">
              <span class="text-brandWhite truncate max-w-[100px]">Main Tera Hero</span>
              <span class="text-brandYellow font-mono text-[9px] font-semibold">★★★★½</span>
            </div>
            <div class="flex justify-between items-center border-b border-brandBorder pb-1.5">
              <span class="text-brandWhite truncate max-w-[100px]">Dhurandhar</span>
              <span class="text-brandYellow font-mono text-[9px] font-semibold">★★★★☆</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-brandWhite truncate max-w-[100px]">Interstellar</span>
              <span class="text-brandYellow font-mono text-[9px] font-semibold">★★★★★</span>
            </div>
          </div>
          
          <p class="font-sans text-xs text-brandMuted leading-relaxed font-light">
            My raw, unfiltered diary logs, rating sheets, and rapid-fire reviews of everything I watch.
          </p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>DIARY LOG</span>
          <a href="{{ site.letterboxd_url }}" target="_blank" rel="noopener noreferrer" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ DIARY</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
