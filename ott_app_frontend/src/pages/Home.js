import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Home
 * Placeholder homepage that will be shown after the splash screen.
 */
function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: '#F3F4F6'
    }}>
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '32px 40px',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(17,24,39,0.08), 0 2px 6px rgba(17,24,39,0.06)',
        border: '1px solid rgba(17,24,39,0.06)',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: 0, color: '#1E3A8A' }}>Welcome to StreamView</h2>
        <p style={{ marginTop: 8, color: '#374151' }}>
          Your content rails will appear here.
        </p>
      </section>
    </main>
  );
}

export default Home;
