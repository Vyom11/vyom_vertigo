---
layout: default
title: Portfolio
permalink: /portfolio/
description: "A curated collection of writing clips at the intersection of engineering logic, culture, and cinematic art."
---

<!-- Portfolio Header -->
<header class="py-8 border-b border-brandBorder mb-8">
  <h1 class="font-serif text-4xl sm:text-5xl md:text-7xl text-brandWhite font-normal tracking-tight leading-none mb-4">
    Portfolio
  </h1>
  <p class="font-sans text-sm md:text-base text-brandMuted font-light max-w-xl leading-relaxed">
    A curated collection of essays, cultural critiques, and analytical articles exploring the patterns in stories and systems.
  </p>
</header>

<div class="space-y-16">
  <!-- Category 1: Arts, Cinema & Cultural Critique -->
  <section>
    <h2 class="font-mono text-xs tracking-widest text-brandMuted uppercase mb-8 flex items-center gap-3">
      <span class="w-1.5 h-1.5 bg-brandWhite rounded-full"></span>
      Arts, Cinema & Cultural Critique
    </h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Clip 1: The Art of Cinematic Silence -->
      {% assign silence_post = site.posts | where: "title", "The Art of Cinematic Silence" | first %}
      <div class="group border border-brandBorder bg-brandPureDark hover:border-brandWhite/20 transition-all duration-300 p-6 md:p-8 rounded-lg flex flex-col justify-between h-full">
        <div>
          <div class="font-mono text-[10px] tracking-widest text-brandMuted uppercase mb-4">
            Source: Vyom Vertigo
          </div>
          <h3 class="font-serif text-xl md:text-2xl text-brandWhite group-hover:text-brandMuted transition-colors duration-300 mb-3 leading-snug">
            The Art of Cinematic Silence
          </h3>
          <p class="font-sans text-xs md:text-sm text-brandMuted leading-relaxed mb-6 font-light">
            An exploration of how modern filmmakers use negative space and silent room tones to construct tension and emotional resonance.
          </p>
        </div>
        <a href="{{ silence_post.url | relative_url }}" class="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-brandWhite group-hover:text-brandMuted transition-all duration-300 uppercase">
          <span>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <!-- Clip 2: Indian Content: The Disconnect -->
      {% assign disconnect_post = site.posts | where: "title", "Indian Content: The Disconnect" | first %}
      <div class="group border border-brandBorder bg-brandPureDark hover:border-brandWhite/20 transition-all duration-300 p-6 md:p-8 rounded-lg flex flex-col justify-between h-full">
        <div>
          <div class="font-mono text-[10px] tracking-widest text-brandMuted uppercase mb-4">
            Source: Vyom Vertigo
          </div>
          <h3 class="font-serif text-xl md:text-2xl text-brandWhite group-hover:text-brandMuted transition-colors duration-300 mb-3 leading-snug">
            Indian Content: The Disconnect
          </h3>
          <p class="font-sans text-xs md:text-sm text-brandMuted leading-relaxed mb-6 font-light">
            A critical look at the stagnation of Indian television and OTT spaces, highlighting their formulaic tropes and lack of creative risks.
          </p>
        </div>
        <a href="{{ disconnect_post.url | relative_url }}" class="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-brandWhite group-hover:text-brandMuted transition-all duration-300 uppercase">
          <span>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Category 2: Technology, Tech Culture & Essays -->
  <section>
    <h2 class="font-mono text-xs tracking-widest text-brandMuted uppercase mb-8 flex items-center gap-3">
      <span class="w-1.5 h-1.5 bg-brandWhite rounded-full"></span>
      Technology, Tech Culture & Essays
    </h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Clip 3: Do Engineering -->
      {% assign engineering_post = site.posts | where: "title", "Do Engineering" | first %}
      <div class="group border border-brandBorder bg-brandPureDark hover:border-brandWhite/20 transition-all duration-300 p-6 md:p-8 rounded-lg flex flex-col justify-between h-full">
        <div>
          <div class="font-mono text-[10px] tracking-widest text-brandMuted uppercase mb-4">
            Source: Vyom Vertigo
          </div>
          <h3 class="font-serif text-xl md:text-2xl text-brandWhite group-hover:text-brandMuted transition-colors duration-300 mb-3 leading-snug">
            Do Engineering
          </h3>
          <p class="font-sans text-xs md:text-sm text-brandMuted leading-relaxed mb-6 font-light">
            A reflective personal essay on why studying engineering provides invaluable mental scaffolding and multidisciplinary perspectives.
          </p>
        </div>
        <a href="{{ engineering_post.url | relative_url }}" class="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-brandWhite group-hover:text-brandMuted transition-all duration-300 uppercase">
          <span>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <!-- Clip 4: AI and its place in our world -->
      {% assign ai_post = site.posts | where: "title", "AI and it's place in our world" | first %}
      <div class="group border border-brandBorder bg-brandPureDark hover:border-brandWhite/20 transition-all duration-300 p-6 md:p-8 rounded-lg flex flex-col justify-between h-full">
        <div>
          <div class="font-mono text-[10px] tracking-widest text-brandMuted uppercase mb-4">
            Source: Vyom Vertigo
          </div>
          <h3 class="font-serif text-xl md:text-2xl text-brandWhite group-hover:text-brandMuted transition-colors duration-300 mb-3 leading-snug">
            AI and its place in our world
          </h3>
          <p class="font-sans text-xs md:text-sm text-brandMuted leading-relaxed mb-6 font-light">
            An analytical deep-dive into the ethics of generative AI art, the importance of artistic labor, and the limits of automated creativity.
          </p>
        </div>
        <a href="{{ ai_post.url | relative_url }}" class="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-brandWhite group-hover:text-brandMuted transition-all duration-300 uppercase">
          <span>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</div>
