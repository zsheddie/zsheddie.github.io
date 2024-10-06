---
# title: Welcome to my gallery!
permalink: /gallery/gallery_USA/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> USA </h1>
  <p> January 2018 </p>
</div>

<div class="gallery-container">
  {% for image in site.data.image_USA.images %}
    <div class="gallery-item">
      <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ image.url }}" data-lightbox="gallery" data-title="{{ image.alt }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}" class="img-fluid">
      </a>
    </div>
  {% endfor %}
</div>

