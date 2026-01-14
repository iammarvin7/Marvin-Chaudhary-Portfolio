import React from 'react';

// Auto-discover images
const photoImports = import.meta.glob('/src/assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const photos = Object.values(photoImports).map((mod) => mod.default);

const Photography = () => {
  if (photos.length === 0) {
    return (
      <section id="photography" className="section container">
        <h2>Photography</h2>
        <p>No photos found in <code>/src/assets/photos/</code> directly. Add images to see them here.</p>
      </section>
    );
  }

  return (
    <section id="photography" className="section container">
      <h2>Photography</h2>
      <div className="gallery-grid">
        {photos.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery photo ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photography;
