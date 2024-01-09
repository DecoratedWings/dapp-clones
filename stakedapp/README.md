# Accessible Staking Dapp

This basic dapp is designed to generally serve as a more accessible version of a staking dapp, where users can stake or unstake various tokens to earn rewards. WCAG Guidlines were followed to insure best practices such as: proper keyboard navigation, color contrasts (through all themes), skip naviagation, modal focus trap, etc.

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

## Accessibility Enhancements

- Themeing & color contrast: The user may select different themes based on their preference. All Themes conform to 
proper color contrast, this can be verified with any contrast tool such as wave for instance. 
- Skip to Content: The user may skip to the main content.
- Info: Token info button for each token that is being staked. 
- Price in Fiat: dollars is used in our case, but the design is that user-friendly currency is used first, with the token amount calculated second. 
- Alerting: Proper alerts for users on screenreaders. Alerts are succinct and clear, and loading screens are compliant.
- About: Page dedicated to an explanation of the dapp. We feel banners are more effective because they can describe that specific page for multi-page apps, however we've included this example as well. 
- Clear confirmation modal: ensure the user understands the course of action they are about to undertake. 
- Modals contain focus traps and clear close/cancel buttons.

## Running Instructions

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
Creates a build directory with a production build of your app.

### `npm run lint`
Runs the linter to verify static code

### `npm run cypress:open`
Opens Cypress to run custom BDD tests for accessibility on the UI.


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

## Netlify Deployment 

For the backend and dapp hosting, our team is leveraging Netlify. 
To deploy to Netlify, first install the functions module 
```$ npm install @netlify/functions ```

Create a 'functions/' directory to host your backend lambda functions. Then run 
the following to deploy a draft URL:
```$ netlify deploy```

Once you confirm the draft URL is in order, or if you want to jump straight to the deployment, simply run:
```$ netlify deploy --prod```

References: 
- [Netlify Functions Deployment](https://docs.netlify.com/functions/lambda-compatibility/?fn-language=ts#prepare-project)


### Deployed Application
This application is deployed at: https://a11y-stakedapp.netlify.app

We have attached a wallet for testnet transactions on ethereum sepolia. 
There is a custom, unaudited staking smart contract designed for basic staking functionality. This code is solely intended to aid in the simulation of a staking dapp. 

StakingDapp Contract Deployed on sepolia here: https://sepolia.etherscan.io/address/0xbbdf8ab081eafb5ea25745ebc1271fa9f8817671#code

Under the hood, the user is staking their Bad Steak BS token (custom ERC20 for simulation purposes) and receiving 1 token for every second of staking. 


### Poor Accessibility Staking Dapp Example 

We have a prior example referenced in our accessibility testing talk on our youtube channel. This dapp is an example of poor UX and important for two reasons. 

1. To point out that regardless of the fact that certain react component libraries are built with some inherent accessibility, it is possible to fail to implement the compnents in an accessible way. 
2. To bring to your attention that although only a few errors appear in the accessibility testing tools (see webaim's wave tool in our video), that many errors go undetected without manual or user testing. 

User testing is imperative apart from audits and automated tooling/test suites. 

- Live application: https://notsogreatux.netlify.app/
- Repository: https://github.com/DecoratedWings/Inaccessible-Stake-Dapp/tree/master/app


