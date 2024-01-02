# Accessible Staking Dapp

This basic dapp is designed to generally serve as a more accessible version of a staking dapp, where users can stake or unstake various tokens to earn rewards. WCAG Guidlines were followed to insure best practices such as: proper keyboard navigation, color contrasts (through all themes), skip naviagation, etc.

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

## Accessibility Testing 

There are both cypress (e2e) and jest-axe accessibility tests that can catch accessibility issues. 

To run the jest tests with checks against axe-core:
```$ npm run test ```

To run the cypress tests first run the app locally:
```$ npm run start ```
Then 
```$ npx cypress open ```

## Resources 
- [web.dev react auditing](https://web.dev/articles/accessibility-auditing-react)
- [coingecko price api](https://www.coingecko.com/api/documentation)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [react-bootstrap](https://react-bootstrap.netlify.app/)
- [react-bootstrap accessibility docs]()

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

