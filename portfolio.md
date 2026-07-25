---
layout: default
title: Portfolio
permalink: /portfolio/
description: "A curated collection of writing clips at the intersection of engineering logic, culture, and cinematic art."
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
  <!-- Category 1: Arts, Cinema & Cultural Critique -->
  <section>
    
    <!-- Category Header Border -->
    <div class="w-full border-t border-b border-brandBorder/60 py-2.5 mb-8 flex justify-between items-center text-[10px] font-retroSans tracking-[0.2em] text-brandYellow uppercase">
      <span>Section 01</span>
      <span>Arts, Cinema & Cultural Critique</span>
      <span class="text-brandRed">❦</span>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Clip 1: The Art of Cinematic Silence (SPREAD STYLE) -->
      {% assign silence_post = site.posts | where: "title", "The Art of Cinematic Silence" | first %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5">
              SOURCE: VYOM VERTIGO
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ silence_post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ silence_post.url | relative_url }}">{{ silence_post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light">
            An exploration of how modern filmmakers use negative space and silent room tones to construct tension and emotional resonance.
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>ESSAY</span>
          <a href="{{ silence_post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>

      <!-- Clip 2: Indian Content: The Disconnect (SPREAD STYLE) -->
      {% assign disconnect_post = site.posts | where: "title", "Indian Content: The Disconnect" | first %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5">
              SOURCE: VYOM VERTIGO
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ disconnect_post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ disconnect_post.url | relative_url }}">{{ disconnect_post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light">
            A critical look at the stagnation of Indian television and OTT spaces, highlighting their formulaic tropes and lack of creative risks.
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>CRITIQUE</span>
          <a href="{{ disconnect_post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Category 2: Technology, Tech Culture & Essays -->
  <section>
    
    <!-- Category Header Border -->
    <div class="w-full border-t border-b border-brandBorder/60 py-2.5 mb-8 flex justify-between items-center text-[10px] font-retroSans tracking-[0.2em] text-brandYellow uppercase">
      <span>Section 02</span>
      <span>Technology, Tech Culture & Essays</span>
      <span class="text-brandRed">❦</span>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Clip 3: Do Engineering (SPREAD STYLE) -->
      {% assign engineering_post = site.posts | where: "title", "Do Engineering" | first %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5">
              SOURCE: VYOM VERTIGO
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ engineering_post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ engineering_post.url | relative_url }}">{{ engineering_post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light">
            A reflective personal essay on why studying engineering provides invaluable mental scaffolding and multidisciplinary perspectives.
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>THOUGHTS</span>
          <a href="{{ engineering_post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>

      <!-- Clip 4: AI and its place in our world (SPREAD STYLE) -->
      {% assign ai_post = site.posts | where: "title", "AI and its place in our world" | first %}
      <div class="bg-charcoalLight/20 border border-brandBorder hover:border-brandYellow/40 p-6 rounded flex flex-col justify-between h-full group transition-all duration-300 relative shadow-sm">
        <div>
          <!-- Red Badge Category -->
          <div class="flex justify-between items-center mb-4">
            <span class="bg-brandRed text-brandWhite text-[9px] font-retroSans tracking-widest uppercase px-2 py-0.5">
              SOURCE: VYOM VERTIGO
            </span>
            <span class="font-mono text-[9px] text-brandMuted">{{ ai_post.date | date: "%B %d, %Y" }}</span>
          </div>
          
          <h3 class="font-display text-2xl font-semibold text-brandWhite group-hover:text-brandYellow transition-colors duration-300 tracking-tight uppercase leading-snug border-b border-brandBorder/40 pb-2">
            <a href="{{ ai_post.url | relative_url }}">{{ ai_post.title }}</a>
          </h3>
          
          <p class="font-sans text-xs text-brandMuted mt-4 leading-relaxed font-light">
            An analytical deep-dive into the ethics of generative AI art, the importance of artistic labor, and the limits of automated creativity.
          </p>
        </div>
        
        <div class="mt-8 pt-4 border-t border-brandBorder/40 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-brandMuted">
          <span>ESSAY</span>
          <a href="{{ ai_post.url | relative_url }}" class="text-brandWhite group-hover:text-brandYellow transition-colors duration-300 flex items-center gap-1 font-retroSans text-[10px] tracking-wider">
            <span>READ SPREAD</span>
            <span class="text-brandRed">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
