---
# title: Welcome to my gallery!
permalink: /gallery/gallery_Norway/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> Norway </h1>
  <p> December 2023 </p>
</div>

<div class="gallery-container">
  {% for image in site.data.image_Norway.images %}
    <div class="gallery-item">
      <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ image.url }}" data-lightbox="gallery" data-title="{{ image.alt }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}" class="img-fluid">
      </a>
    </div>
  {% endfor %}
</div>

