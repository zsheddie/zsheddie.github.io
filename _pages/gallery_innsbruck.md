---
# title: Welcome to my gallery!
permalink: /gallery/gallery_innsbruck/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> Innsbruck </h1>
  <p> Innsbruck ist eine Großstadt im Westen Österreichs und Hauptstadt Bundeslandes Tirol. </p>
</div>

<div class="gallery-container">
  {% for image in site.data.image.images %}
    <div class="gallery-item">
      <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ image.url }}" data-lightbox="gallery" data-title="{{ image.alt }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}" class="img-fluid">
      </a>
    </div>
  {% endfor %}
</div>

