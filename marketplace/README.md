# Accessible Marketplace

E-Commerce is one of the most challenging areas for accessibility, as often apps/websites are very inaccessible and complicated. NFT or equivalent web3 marketplaces are subject to 
the exact same issues from existing marketplaces. This accessible marketplace dapp clone is designed to mimic an NFT markeplace at a smaller scale, while being designed to adhere to WCAG guidelines. 

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

## Accessibility Testing 

Unfortunately NextJS version 14 is currently not supported by cypress for e2e testing. 
Only jest axe tests are currently in effect for this dapp clone as we are using version 14. Previous versions are compatible. Please see more details in the link from their documentation under resources.

To run the jest tests with checks against axe-core:
```$ npm run test ```

## Resources 
- [NextJS v14 Cypress Issue](https://nextjs.org/docs/pages/building-your-application/testing/cypress)
- [NextJS Accessibility documentation](https://nextjs.org/docs/architecture/accessibility)
- [Chakra UI component library](https://chakra-ui.com/)
- [Chakra UI Accessibility Blog Post](https://chakra-ui.com/blog/the-beginners-guide-to-building-an-accessible-web#8-use-aria-landmarks)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)


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


