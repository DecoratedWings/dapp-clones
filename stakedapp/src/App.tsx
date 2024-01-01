import React, { useReducer } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Footer from "./components/Footer.tsx";
import Layout from "./components/Layout.tsx";
import NavbarComponent from "./components/Navbar.tsx";
import { AlertProvider } from "./context/AlertContext.tsx";
import { IThemeProvider, ThemeContext } from "./context/ThemeContext.tsx";
import ThemeReducer from "./context/ThemeReducer.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import GlobalStyle from "./themes/globalStyles.ts";
import { lightTheme } from "./themes/lightTheme.ts";

const App: React.FC = () => {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []); 
  const themeContextProviderValue: IThemeProvider = {
    currentTheme,
    setNewTheme,
  };

  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(lightTheme);
  }

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={currentTheme.updatedTheme}>
        <AlertProvider>
          <Layout>
            <GlobalStyle />
            <Router>
              <NavbarComponent />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
              </Routes>
            </Router>
          </Layout>
          <Footer />
        </AlertProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
