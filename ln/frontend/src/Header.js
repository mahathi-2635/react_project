import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #fff;
`;

const Logo = styled.div`
  font-family: 'DM Sans';
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 0.15px;
  cursor: pointer;
`;

const Lend = styled.span`
  color: #1B424C;
`;

const Now = styled.span`
  color: #39C260;
`;

const Nav = styled.nav`
  a {
    margin: 0 20px;
    text-decoration: none;
    color: #1B424C;
    font-family: 'DM Sans';
    font-size: 18px;
    cursor: pointer;
  }
`;

const LoginSignupButton = styled.button`
  background-color: #1B424C;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: bold;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginSignupClick = () => {
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>
        <Lend>Lend</Lend>
        <Now>Now</Now>
      </Logo>
      <Nav className="nav">
        <a onClick={() => handleScrollToSection('hero-section')}>Home</a>
        <a onClick={() => handleScrollToSection('how-we-work')}>How we work?</a>
        <a onClick={() => handleScrollToSection('contact-us')}>Contact Us</a>
      </Nav>
      <LoginSignupButton onClick={handleLoginSignupClick}>Login/Signup</LoginSignupButton>
    </HeaderContainer>
  );
};

export default Header;