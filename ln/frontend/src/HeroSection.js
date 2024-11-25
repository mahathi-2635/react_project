import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from './assets/Pic-1.png'; // Correct path to your image

const HeroSection = () => {
  const navigate = useNavigate();

  const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px 0',
    backgroundColor: '#fff',
  };

  const heroContentStyle = {
    maxWidth: '50%',
  };

  const heroContentH1Style = {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '68px',
    color: '#1B424C',
    marginBottom: '20px',
    textAlign: 'left',
    paddingLeft: '20px',
  };

  const heroContentPStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'regular',
    fontSize: '17px',
    color: '#000',
    marginBottom: '40px',
    textAlign: 'justify',
    paddingLeft: '25px',
  };

  const applyNowStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'medium',
    fontSize: '16px',
    color: '#1B424C',
    padding: '10px 20px',
    border: '2px solid #1B424C',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    display: 'inline-block',
    marginLeft: '200px',
  };

  const applyNowHoverStyle = {
    backgroundColor: '#1B424C',
    color: '#fff',
  };

  const heroImageStyle = {
    maxWidth: '95%',
    height: 'auto',
    paddingLeft:'50px',
  };

  const handleApplyNowClick = () => {
    navigate('/login');
  };

  return (
    <div id="hero-section">
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroContentH1Style}>Quick and Easy Loans for Your Financial Needs.</h1>
          <p style={heroContentPStyle}>
            Our loan services offer a hassle-free and streamlined borrowing experience,
            providing you with the funds you need in a timely manner to meet your financial
            requirements.
          </p>
          <button
            style={applyNowStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = applyNowHoverStyle.backgroundColor;
              e.target.style.color = applyNowHoverStyle.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = applyNowStyle.backgroundColor;
              e.target.style.color = applyNowStyle.color;
            }}
            onClick={handleApplyNowClick}
          >
            Apply Now
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Financial Services" style={heroImageStyle} />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
