# Accessible Marketplace

E-Commerce is one of the most challenging areas for accessibility, as often apps/websites are very inaccessible and complicated. NFT or equivalent web3 marketplaces are subject to 
the exact same issues from existing marketplaces. This accessible marketplace dapp clone is designed to mimic an NFT markeplace at a smaller scale, while being designed to adhere to WCAG guidelines. 

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

## Accessibility Enhancements

- Static Carousels: They don't move on their own and although it is better to avoid carousels if possible, their left/right navigation is more accessible. 
- Skip Filter Button: Instead of forcing the user to navigate through all the filters on the /explore tab, a skip filter button pops up on tabbing. The allows the user to jump to the main content past the filters. 
- Breadcrumbs: Providing links for the user to backtrack as they venture deeper into specific collection items. 
A good breadcrumb example can be: `home > category > collection_name > specfic_item`
- No infinite scroll: There is a default "show all" with pagination in this app. Infinite scroll should be a toggleable option if present. "Load more" buttons work a bit better than pagination for many users, but both are valid.
- Suggesting marketplaces to use fiat (dollar for example), values for pricing info
- Alternative Text: Every NFT should have a proper description, describing what the image looks like. We have proposed [ERC-7515](https://github.com/ethereum/ERCs/pull/191) as the best way to achieve this. For pre-existing collections, consider storing the descriptions in a data store (decentralized ideally), and doing an api fetch for the alt="" field in img. 

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


### Deployed Application


