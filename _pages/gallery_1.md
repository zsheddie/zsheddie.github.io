---
# title: Welcome to my gallery!
permalink: /archive/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> Innsbruck </h1>
  <p> Innsbruck ist eine Großstadt im Westen Österreichs und Hauptstadt Bundeslandes Tirol. </p>
</div>

<div class="gallery-container">
  {% for album in site.data.album.albums %}
    <div class="gallery-item">
    <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ album.link }}">
        <img src="{{ album.preview }}" alt="{{ album.title }}" class="album-preview">
        <h2>{{ album.title }}</h2>
      </a>
    </div>
  {% endfor %}
</div>

