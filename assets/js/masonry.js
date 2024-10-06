window.addEventListener('load', function () {
    const grid = document.querySelector('.gallery-container');
    const msnry = new Masonry(grid, {
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-item',
      percentPosition: true
    });
  });
  