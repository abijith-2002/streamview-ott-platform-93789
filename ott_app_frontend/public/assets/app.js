(function () {
  'use strict';
  // Global app JS for all screens. Placeholder for future interactions.
  // Example: simple image loading error handler to aid debugging of figma image paths.
  document.addEventListener('error', function (e) {
    const t = e.target;
    if (t && t.tagName === 'IMG') {
      console.warn('Image failed to load:', t.getAttribute('src'));
    }
  }, true);
})();
