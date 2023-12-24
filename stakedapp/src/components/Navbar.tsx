import React, { useContext } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { themeMap } from '../themes/themeDefinitions';
import styled from 'styled-components';

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
      <StyledDropdownToggle  id="theme-dropdown">
        Theme
      </StyledDropdownToggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleThemeChange('light')}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('dark')}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('ocean')}>Ocean</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('nature')}>Nature</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('sunrise')}>Sunrise</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('space')}>Space</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );


  return (
    <Navbar  style={{ borderBottom: '2px solid #dee2e6' }} expand="lg">
      <Container>
        <StyledNavBarBrand href="/">Staking Dapp</StyledNavBarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:50}}>
          <Nav className="me-auto">
            <LinkContainer to="/" >
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
