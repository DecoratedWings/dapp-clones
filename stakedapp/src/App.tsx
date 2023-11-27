import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { ThemeProvider } from 'styled-components';
import { IThemeProvider, ThemeContext } from './context/ThemeContext';
import ThemeReducer from './context/ThemeReducer';
import {lightTheme} from './themes/lightTheme';
import GlobalStyle from './themes/globalStyles';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []); // initialTheme should be a valid theme object
  const themeContextProviderValue: IThemeProvider = { currentTheme, setNewTheme };
  
  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(lightTheme);
  }

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
    <ThemeProvider theme={currentTheme.updatedTheme}>
        <Layout>
        <GlobalStyle />
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        </Layout>
        <Footer />

      </ThemeProvider>
    </ThemeContext.Provider>  );
};

export default App;
