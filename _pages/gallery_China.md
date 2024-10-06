---
# title: Welcome to my gallery!
permalink: /gallery/gallery_China/
layout: gallery_1
---


<div style="text-align: center; ">
  <h1> China </h1>
  <p> 1998-2021 </p>
</div>

<div class="gallery-container">
  {% for image in site.data.image.images_China %}
    <div class="gallery-item">
      <!-- <img src="{{ image.url }}" alt="{{ image.alt }}"> -->
      <a href="{{ image.url }}" data-lightbox="gallery" data-title="{{ image.alt }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}" class="img-fluid">
      </a>
    </div>
  {% endfor %}
</div>

