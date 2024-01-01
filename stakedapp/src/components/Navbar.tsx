import React, { useContext } from 'react';
import { Container, Dropdown,Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import { ThemeContext } from '../context/ThemeContext.tsx';
import { themeMap } from '../themes/themeDefinitions.ts';
import SkipLink from './SkipLink.tsx';

const StyledNavLink = styled(Nav.Link)`
  color: ${(props) => props.theme.colors.text} !important; 
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px; 
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary}; 
  }
  `;

  const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #F5F5F5 !important; // Stable gray background
  color: #000000; // Black text for high contrast
  border-color: #707070 !important; // Slightly darker border for depth
  font-weight: bold;

  &:hover, &:focus {
    background-color: #C0C0C0 !important; // Slightly darker on hover/focus
    border-color: #606060 !important;
    color: #000000;
  }
`;


const StyledNavBarBrand = styled(Navbar.Brand)`
  color: ${(props) => props.theme.colors.text} !important;
`;

const NavbarComponent: React.FC = () => {
  const { setNewTheme } = useContext(ThemeContext);

  const handleThemeChange = (themeName: string) => {
    setNewTheme(themeMap[themeName]);
  };

  const themeDropdown = (
    <Dropdown>
      <StyledDropdownToggle >
        Theme
      </StyledDropdownToggle>
      <Dropdown.Menu>
        <Dropdown.Item  id='light' onClick={() => handleThemeChange('light')}>Light</Dropdown.Item>
        <Dropdown.Item id='dark' onClick={() => handleThemeChange('dark')}>Dark</Dropdown.Item>
        <Dropdown.Item id='ocean' onClick={() => handleThemeChange('ocean')}>Ocean</Dropdown.Item>
        <Dropdown.Item id='nature' onClick={() => handleThemeChange('nature')}>Nature</Dropdown.Item>
        <Dropdown.Item id='sunrise' onClick={() => handleThemeChange('sunrise')}>Sunrise</Dropdown.Item>
        <Dropdown.Item id='space' onClick={() => handleThemeChange('space')}>Space</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );


  return (
    <Navbar  style={{ borderBottom: '2px solid #dee2e6' }} expand="lg">
      <Container>
        <StyledNavBarBrand href="/">Staking Dapp</StyledNavBarBrand>
        <SkipLink />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:50}}>
          <Nav className="me-auto">
            <LinkContainer to="/home" >
            <StyledNavLink>Home</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/about">
            <StyledNavLink>About</StyledNavLink>
            </LinkContainer>

            {/* Mobile view, react-bootstrap setting*/}
            <div className="d-lg-none">
              {themeDropdown}
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Desktop/Tablet view */}
        <div className="d-none d-lg-block">
          {themeDropdown}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
