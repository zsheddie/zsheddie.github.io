---
# title: Welcome to my gallery!
permalink: /gallery/gallery_Spain/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> Spain </h1>
  <p> October 2022 </p>
</div>

<div class="gallery-container">
  {% for image in site.data.image_Spain.images %}
    <div class="gallery-item">
      <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ image.url }}" data-lightbox="gallery" data-title="{{ image.alt }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}" class="img-fluid">
      </a>
    </div>
  {% endfor %}
</div>

