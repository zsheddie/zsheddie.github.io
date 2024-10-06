---
# title: Welcome to my gallery!
permalink: /gallery/
layout: gallery_0
---


<div style="text-align: center; ">
  <h1> My travel album </h1>
  <p> The first thing God created was the journey, </p>
  <p> and then came doubt and nostalgia.</p>
</div>

<div class="album-container">
  {% for album in site.data.album.albums %}
    <div class="album-item">
    <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ album.link }}">
        <img src="{{ album.preview }}" alt="{{ album.title }}" class="album-preview">
        <h2>{{ album.title }}</h2>
      </a>
    </div>
  {% endfor %}
</div>

