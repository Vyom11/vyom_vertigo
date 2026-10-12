---
layout: default
title: "Redirecting to Contact"
permalink: /about/
---

<head>
  <meta http-equiv="refresh" content="0; url={{ '/contact/' | relative_url }}">
  <link rel="canonical" href="{{ '/contact/' | absolute_url }}">
</head>

<div class="site-wrapper" style="padding-block: 4rem; text-align: center;">
  <div class="character-sheet" style="max-width: 600px; margin-inline: auto;">
    <h1 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 1rem;">Scene Change</h1>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      The About page has moved to Contact &amp; Find Me.
    </p>
    <p>
      Redirecting you now... If your browser doesn't redirect automatically, click below:
    </p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Go to Contact &rarr;</a>
  </div>
</div>