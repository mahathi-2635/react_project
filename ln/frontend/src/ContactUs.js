import React from 'react';
import contactImage from './assets/Pic-7.png';

const ContactUs = () => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 20px',
    background: 'linear-gradient(90deg, #e2ebe9, #e5f0ee, #d5e2df)',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '50%',
    textAlign: 'justify',
  };

  const titleStyle = {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#1B424C',
    marginBottom: '50px',
    textAlign: 'justify',
    paddingRight: '320px',
  };

  const imageStyle = {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
    paddingRight: '180px',
  };

  const descriptionStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'regular',
    fontSize: '18px',
    color: '#000',
    marginBottom: '40px',
    textAlign: 'justify',
    paddingLeft: '50px',
  };

  const formContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
    backgroundColor: '#fff',
    height: '400px',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginRight: '60px',
    marginTop: '100px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  const labelStyle = {
    fontFamily: 'Raleway',
    fontWeight: 'regular',
    fontSize: '16px',
    color: '#1B424C',
    marginBottom: '5px',
    textAlign: 'left',
    alignSelf: 'flex-start',
  };

  const inputStyle = {
    fontFamily: 'Raleway',
    fontWeight: 'regular',
    fontSize: '16px',
    padding: '10px 3px',
    marginBottom: '30px',
    border: '1px solid #ccc',
    borderRadius: '45px',
    width: '100%',
  };

  const buttonStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#1B424C',
    padding: '10px 25px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    alignSelf: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#000',
  };

  return (
    <div id="contact-us">
      <section style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={titleStyle}>Contact us</h2>
          <img src={contactImage} alt="Contact Us" style={imageStyle} />
          <p style={descriptionStyle}>
            QuickFunds - Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!
          </p>
        </div>
        <div style={formContainerStyle}>
          <form style={formStyle}>
            <label style={labelStyle}>Your Name</label>
            <input type="text" style={inputStyle} />
            <label style={labelStyle}>Phone number</label>
            <input type="text" style={inputStyle} />
            <label style={labelStyle}>Email address</label>
            <input type="email" style={inputStyle} />
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor;
              }}
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
