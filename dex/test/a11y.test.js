/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const path = require("path");
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

const readHtmlFile = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

describe("Accessibility tests", () => {
  it("should have no accessibility violations against axe checks", async () => {
    const html = readHtmlFile(path.join(__dirname, "..", "index.html"));

    // Configure axe to disable specific rules
    const axeResults = await axe(html, {
      rules: {
        //Examples
        // "image-alt": { enabled: false }, // Disable checks for image alt text
        // region: { enabled: false }, // Disable checks for content not contained by landmarks
      },
    });

    expect(axeResults).toHaveNoViolations();
  });
});
