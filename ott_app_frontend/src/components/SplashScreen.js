import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './splash.css';

/**
 * PUBLIC_INTERFACE
 * SplashScreen
 * A full-screen splash screen that shows the app title and transitions to the homepage after ~3 seconds.
 */
function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home after ~3 seconds
    const timer = setTimeout(() => {
      navigate('/home', { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-root" role="status" aria-label="Loading StreamView">
      <div className="splash-card">
        <div className="splash-logo-circle" aria-hidden="true">SV</div>
        <h1 className="splash-title">StreamView</h1>
        <p className="splash-subtitle">Professional streaming, simplified</p>
      </div>
    </div>
  );
}

export default SplashScreen;
