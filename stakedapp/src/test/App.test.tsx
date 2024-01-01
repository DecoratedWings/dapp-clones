import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Navbar } from "react-bootstrap";
import { ThemeProvider } from "styled-components";

import Footer from "../components/Footer.tsx";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import { lightTheme } from "../themes/lightTheme.ts";

  
describe("App Page accessibility tests", () => {
  it("Home page should be accessible and have no violations", async () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });

  it("About page should be accessible and have no violations", async () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <About />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });
});


describe("Individual component accessibility tests", () => {
  it("Footer should be accessible and have no violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });

  it("Navbar should be accessible and have no violations", async () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Navbar />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });
});
