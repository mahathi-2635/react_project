import React from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 60px',
    backgroundColor: '#0c2328',
    color: '#fff',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontSize: '30px',
    color: '#fff',
    marginBottom: '10px',
    marginRight: '500px',
  };

  const highlightStyle = {
    color: '#39C260',
  };

  const descriptionStyle = {
    fontFamily: 'Raleway',
    fontSize: '14px',
    textAlign: 'justify',
    color: '#fff',
    marginBottom: '0px',
    lineHeight: '0.5',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '24px',
  };

  const headingStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#fff',
    marginBottom: '10px',
    marginTop: '30px',
    marginRight:'20px',
  };

  const itemStyle = {
    fontFamily: 'Raleway',
    fontSize: '14px',
    color: '#fff',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '0.5',
  };

  const itemIconStyle = {
    marginRight: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h2 style={titleStyle}>
          Lend<span style={highlightStyle}>Now</span>
        </h2>
        <p style={descriptionStyle}>
          Our mission is to empower individuals and businesses by providing 
        </p>
        <p style={descriptionStyle}>
          them with the financial resources they need to achieve their goals.
        </p>
        <div style={socialIconsStyle}>
          <FaFacebookF style={iconStyle} />
          <FaWhatsapp style={iconStyle} />
          <FaLinkedinIn style={iconStyle} />
          <FaInstagram style={iconStyle} />
        </div>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>OUR SERVICES</h3>
        <p style={itemStyle}>Personal Loan</p>
        <p style={itemStyle}>Business Loan</p>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>CONTACT US</h3>
        <p style={itemStyle}><AiFillPhone style={itemIconStyle} /> +91 9876543210</p>
        <p style={itemStyle}><AiOutlineMail style={itemIconStyle} /> lendnow@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
