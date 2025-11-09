import React, { useEffect } from 'react';
import './home-page-2-68.css';

/**
 * PUBLIC_INTERFACE
 * HomePage
 * A pixel-accurate implementation of the Figma-based home page using the generated HTML/CSS.
 * - Imports the screen-specific CSS and the shared design token CSS (via CSS @import)
 * - Reproduces the absolute-positioned layout inside a fixed 1280x1024 container
 * - Migrates any screen JS initialization into a React useEffect()
 */
function HomePage() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('home-page-2-68 screen script loaded (React useEffect)');

    // Trigger entrance animations after mount (respect prefers-reduced-motion via CSS)
    // We add 'appear' class to animation hooks.
    const root = document.querySelector('.screen-root');
    if (root) {
      const hero = root.querySelectorAll('.hero-animate');
      const header = root.querySelectorAll('.header-animate');
      const sections = root.querySelectorAll('.section-animate');
      window.requestAnimationFrame(() => {
        hero.forEach(el => el.classList.add('appear'));
        header.forEach(el => el.classList.add('appear'));
        sections.forEach(el => el.classList.add('appear'));
      });
    }
  }, []);

  // Helper for images with extra classes
  const img = (src, alt, style, extraClass = '') => (
    <img
      className={`abs ${extraClass}`.trim()}
      alt={alt}
      src={src}
      style={style}
    />
  );

  return (
    <div className="screen-root" role="main" aria-label="home page">
      {/* image 7 (hero) */}
      {img(
        '/assets/figmaimages/figma_image_2_69.png',
        'image 7',
        { left: 0, top: 0, width: 1280, height: 622, objectFit: 'cover', zIndex: 1, border: 'none' },
        'image img-hero hero-animate'
      )}

      {/* Squid Games Season-1 */}
      <div className="abs ds-typo-9 section-animate" style={{ left: 880, top: 775, width: 155, height: 17, zIndex: 2 }}>
        Squid Games Season-1
      </div>

      {/* Dark Season-1 */}
      <div className="abs ds-typo-10 section-animate" style={{ left: 650, top: 775, width: 98, height: 17, zIndex: 3 }}>
        Dark Season-1
      </div>

      {/* The Rings of Power (clamped to 0) */}
      <div className="abs ds-typo-10 section-animate" style={{ left: 0, top: 775, width: 130, height: 17, zIndex: 4 }}>
        The Rings of Power
      </div>

      {/* NOPE */}
      <div className="abs ds-typo-9 section-animate" style={{ left: 190, top: 775, width: 39, height: 17, zIndex: 5 }}>
        NOPE
      </div>

      {/* TENET */}
      <div className="abs ds-typo-10 section-animate" style={{ left: 420, top: 775, width: 46, height: 17, zIndex: 6 }}>
        TENET
      </div>

      {/* Only Murder In The Building */}
      <div className="abs ds-typo-10 section-animate" style={{ left: 1110, top: 775, width: 186, height: 17, zIndex: 7 }}>
        Only Murder In The Building
      </div>

      {/* Description */}
      <div className="abs ds-typo-11 header-animate" style={{ left: 23, top: 271, width: 344, height: 110, zIndex: 8 }}>
        Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester
        Campbell, an inspector, decides to nab him and put an end to the criminal activities.
      </div>

      {/* Title */}
      <div className="abs ds-typo-12 header-animate no-wrap" style={{ left: 23, top: 192, width: 344, height: 46, zIndex: 9 }}>
        Peaky Blinders
      </div>

      {/* Rectangle 12 background strip */}
      <div className="abs section-animate" style={{ left: 0, top: 293, width: 1283, height: 329, zIndex: 10, background: 'transparent' }} />

      {/* Group 11 - Play */}
      <div className="abs round-47 section-animate" style={{ left: 23, top: 497, width: 140, height: 46, zIndex: 11 }}>
        <button className="abs round-47 bg-red" style={{ left: 0, top: 0, width: 140, height: 46, border: 'none', cursor: 'pointer' }}>
          {/* full-size button for a11y hit area */}
        </button>
        <div className="abs ds-typo-13" style={{ left: 52, top: 12, width: 36, height: 22 }}>
          Play
        </div>
      </div>

      {/* Group 12 - Watch Trailer */}
      <div className="abs round-42 section-animate" style={{ left: 183, top: 497, width: 140, height: 46, zIndex: 12 }}>
        <button className="abs round-42 bg-gray" style={{ left: 0, top: 0, width: 140, height: 46, border: 'none', cursor: 'pointer' }}>
          {/* full-size button for a11y hit area */}
        </button>
        <div className="abs ds-typo-14 no-wrap" style={{ left: 14, top: 12, width: 112, height: 22 }}>
          Watch Trailer
        </div>
      </div>

      {/* Rating icon */}
      {img(
        '/assets/figmaimages/figma_image_2_87.png',
        'image 8',
        { left: 23, top: 411, width: 32, height: 18, zIndex: 13 },
        'icon section-animate'
      )}

      {/* 8.8/10 */}
      <div className="abs ds-typo-15 section-animate" style={{ left: 65, top: 411, width: 49, height: 18, zIndex: 14 }}>
        8.8/10
      </div>

      {/* 2B+ Streams */}
      <div className="abs ds-typo-15 section-animate" style={{ left: 23, top: 449, width: 100, height: 18, zIndex: 15 }}>
        2B+ Streams
      </div>

      {/* New This Week */}
      <div className="abs ds-typo-16 section-animate" style={{ left: 23, top: 583, width: 135, height: 22, zIndex: 16 }}>
        New This Week
      </div>

      {/* Categories label */}
      <div className="abs ds-typo-16 section-animate" style={{ left: 0, top: 832, width: 96, height: 22, zIndex: 17 }}>
        Categories
      </div>

      {/* Thumbnails: add .thumb class for hover/focus and reserve aspect */}
      {img(
        '/assets/figmaimages/figma_image_2_92.png',
        'Rectangle 11',
        { left: 880, top: 645, width: 200, height: 120, objectFit: 'cover', zIndex: 18 },
        'image img-thumb thumb section-animate'
      )}
      <div className="abs thumb section-animate" style={{ left: 0, top: 874, width: 200, height: 120, zIndex: 19, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 190, top: 874, width: 200, height: 120, zIndex: 20, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 420, top: 874, width: 200, height: 120, zIndex: 21, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 650, top: 874, width: 200, height: 120, zIndex: 22, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 880, top: 874, width: 200, height: 120, zIndex: 23, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 1110, top: 874, width: 200, height: 120, zIndex: 24, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 650, top: 645, width: 200, height: 120, zIndex: 25, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 190, top: 645, width: 200, height: 120, zIndex: 26, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 0, top: 645, width: 200, height: 120, zIndex: 27, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 420, top: 645, width: 200, height: 120, zIndex: 28, background: 'var(--color-101010)', opacity: 0.2 }} />
      <div className="abs thumb section-animate" style={{ left: 1110, top: 645, width: 200, height: 120, zIndex: 29, background: 'var(--color-101010)', opacity: 0.2 }} />

      {/* Category labels */}
      <div className="abs ds-typo-17 section-animate" style={{ left: 10, top: 914, width: 100, height: 39, zIndex: 30 }}>Action</div>
      <div className="abs ds-typo-17 section-animate" style={{ left: 240, top: 914, width: 100, height: 39, zIndex: 31 }}>Drama</div>
      <div className="abs ds-typo-17 section-animate" style={{ left: 483, top: 914, width: 74, height: 39, zIndex: 32 }}>SciFi</div>
      <div className="abs ds-typo-17 section-animate" style={{ left: 903, top: 914, width: 155, height: 39, zIndex: 33 }}>Animation</div>
      <div className="abs ds-typo-17 section-animate" style={{ left: 1167, top: 914, width: 86, height: 39, zIndex: 34 }}>Serial</div>
      <div className="abs ds-typo-17 section-animate" style={{ left: 701, top: 914, width: 99, height: 39, zIndex: 35 }}>Horror</div>

      {/* Group 9 (next) */}
      <div className="abs section-animate" style={{ left: 1186, top: 684, width: 46, height: 46, zIndex: 36 }}>
        {/* Ellipse 2 - fallback */}
        <div className="abs circle bg-white thumb" style={{ left: 0, top: 0, width: 46, height: 46 }} />
        <div className="abs" style={{ left: 6, top: 5, width: 35, height: 35 }}>
          {/* Vector next - placeholder caret */}
          <div
            className="abs"
            style={{
              left: 10.208, top: 3.646, width: 16.042, height: 27.708,
              borderRight: '4px solid #000', borderTop: '4px solid transparent', borderBottom: '4px solid transparent'
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Group 10 (next) */}
      <div className="abs section-animate" style={{ left: 1186, top: 907, width: 46, height: 46, zIndex: 37 }}>
        <div className="abs circle bg-white thumb" style={{ left: 0, top: 0, width: 46, height: 46 }} />
        <div className="abs" style={{ left: 6, top: 5, width: 35, height: 35 }}>
          <div
            className="abs"
            style={{
              left: 10.208, top: 3.646, width: 16.042, height: 27.708,
              borderRight: '4px solid #000', borderTop: '4px solid transparent', borderBottom: '4px solid transparent'
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Settings icon frame */}
      <div className="abs bg-white section-animate" style={{ left: 1223, top: 91, width: 30, height: 30, zIndex: 38 }}>
        {/* If SVGs exist, they will render; otherwise, keep structure */}
        {/* inner */}
        <div className="abs" style={{ left: 9.25, top: 9.167, width: 11.667, height: 11.667 }} aria-hidden="true" />
        {/* outer */}
        <div className="abs" style={{ left: 1.667, top: 1.667, width: 26.667, height: 26.667 }} aria-hidden="true" />
      </div>

      {/* User avatar */}
      {img(
        '/assets/figmaimages/figma_image_2_133.png',
        'Ellipse 1',
        { left: 1215, top: 22, width: 45, height: 45, zIndex: 39, objectFit: 'cover', borderRadius: '50%' },
        'image section-animate'
      )}

      {/* Username */}
      <div className="abs ds-typo-18 section-animate" style={{ left: 1057, top: 22, width: 145, height: 50, zIndex: 40 }}>
        User007Name
      </div>

      {/* Top nav frame */}
      <div className="abs round-35 section-animate" style={{ left: 20, top: 22, width: 406, height: 60, background: 'var(--style-8-bg)', zIndex: 41 }}>
        {/* Search */}
        <div className="abs btn-white-80 thumb" style={{ left: 25, top: 15, width: 30, height: 30 }}>
          {/* Placeholder dot */}
          <div className="abs" style={{ left: 13, top: 13, width: 4, height: 4, borderRadius: '50%', background: '#000' }} aria-hidden="true" />
        </div>
        {/* Home */}
        <div className="abs btn-white-80 thumb" style={{ left: 105, top: 15, width: 30, height: 30 }}>
          <div
            className="abs"
            style={{
              left: 2.493, top: 2.5, width: 25.007, height: 25.007,
              border: '0.3px solid var(--style-11-border-color)', background: 'var(--style-11-bg)'
            }}
          />
        </div>
        {/* Trend */}
        <div className="abs btn-white-80 thumb" style={{ left: 185, top: 15, width: 30, height: 30 }}>
          <div className="abs" style={{ left: 1.172, top: 6.797, width: 25.774, height: 16.399 }} aria-hidden="true" />
        </div>
        {/* Camera */}
        <div className="abs btn-white-80 thumb" style={{ left: 265, top: 15, width: 30, height: 30 }}>
          <div className="abs" style={{ left: 2.5, top: 3.75, width: 25, height: 22.5 }} aria-hidden="true" />
        </div>
        {/* Movie open */}
        <div className="abs btn-white-80 thumb" style={{ left: 345, top: 15, width: 30, height: 30 }}>
          <div className="abs" style={{ left: 2.344, top: 2.881, width: 25.536, height: 24.775 }} aria-hidden="true" />
        </div>
        {/* Line 1 */}
        <div className="abs line-vertical" style={{ left: 145, top: 15, height: 30 }} />
      </div>
    </div>
  );
}

export default HomePage;
