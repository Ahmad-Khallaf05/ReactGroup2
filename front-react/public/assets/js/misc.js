import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './YourStyles.css'; // Ensure to include your styles here

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isBannerVisible, setBannerVisible] = useState(true);
  const [cookies, setCookie] = useCookies(['purple-free-banner']);

  const ChartColor = [
    "#5D62B4", "#54C3BE", "#EF726F", "#F9C446", "rgb(93.0, 98.0, 180.0)", "#21B7EC", "#04BCCC"
  ];

  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop();
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const closeBanner = () => {
    setBannerVisible(false);
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 24 hours
    setCookie('purple-free-banner', 'true', { expires: date });
  };

  return (
    <div className={`dashboard ${isBannerVisible ? 'banner-visible' : ''}`}>
      {isBannerVisible && (
        <div id="proBanner" className="proBanner">
          <span>Your promotional message here.</span>
          <button onClick={closeBanner} id="bannerClose">Close</button>
        </div>
      )}

      <nav className="sidebar">
        <ul>
          <li className={`nav-item ${activeLink === 'index.html' ? 'active' : ''}`}>
            <a href="/index.html" onClick={() => handleLinkClick('index.html')}>Home</a>
          </li>
          <li className={`nav-item ${activeLink === 'another-page.html' ? 'active' : ''}`}>
            <a href="/another-page.html" onClick={() => handleLinkClick('another-page.html')}>Another Page</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      <button id="fullscreen-button" onClick={toggleFullScreen}>
        Toggle Fullscreen
      </button>

      <div className="content-wrapper">
        {/* Your content goes here */}
      </div>

      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Dashboard;
