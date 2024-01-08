# Accessible Dex 

Decentralized Exhanges are among the simpler interfaces for dapps. 
Although they appear to be straightforward, they are still fraught with basic accessibility issues for users. This example features a very simple but more accessible design, with some room for suggested improvements for user experience.

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

## Accessibility Enhancements

- Light / Dark Theme toggle with light theme being default as best practice.
- Login Button instead of Connect wallet. With social sign in becoming the norm, it is more user friendly to have a login modal popup with various options (SSO, connect wallet, email sign in, etc)
- Clearly labeled form, with no jargon. If jargon or advanced terms are present, they must be accompanied with enough information on the page for the user to understand the gist of it. 
- More straightforward estimation and present values in familar currencies as a focus, rather than the token amount first. 
- Ticker + Token symbol listed together; can search list by either value. 
- Focus trap modal. We've provided a react hook for focus trapping the modal

## Running Instructions
Using BrowserSync server, run 
```$ npm start`` 
to start the app. 

If you're using VSCode, the LiveServer extension could be used instead. 

## Linting 
Allows for static code analysis of many prevalent accessibility rules. 
For example, checking for alternative text, keyboard interactivity, ARIA usage, etc.  

For this application we have included:

```<script defer src="https://cdn.accesslint.com/a11y-logger-0.1.0.js"></script>```

in index.html, which runs against aXe core accessibility library and displays any errors in the console.

Otherwise simply do: 
```$ npm run lint```


## Testing

Run with:
```$ npm run test```

In addition to the WAVE browser plugin by WebAIM, which facilitates page scanning, the Axe testing suite offers robust accessibility linting capabilities. However, due to limitations with jsdom, Axe is unable to assess color contrast issues. On the other hand, the WAVE tool is capable of evaluating color contrast, making the combination of Axe and WAVE particularly effective. This synergy is further enhanced by the range of additional functionalities provided by WAVE.

Jest-Axe allows you to check rendered code against axe standards.
We will reiterate an important point that they mention upfront in the repository: 

``The GDS Accessibility team found that only ~30% of issues are found by automated testing.``

User testing is required even if all linting, automated test suites, and audits pass.


## Deployed Application

This application is deployed at: https://a11y-dex.netlify.app/

Netifly specific deployments include a pluggable lighthouse component, an automated tool for accessibility and webapp/website performance. 

- [Netifly Lighthouse Article](https://docs.netlify.com/monitor-sites/lighthouse/)
- [Lighthouse Chrome](https://developer.chrome.com/docs/lighthouse/overview/)


# Room For Improvement 

Naturally this is a dapp clone designed to simulate a more accessible dex. Some items for further consideration in a production grade design are as follows: 

- Token Glossary Popup: Allow the user to review a specific modal with clear information on each token, links to further vetted resources for more reading, and some form of risk assessment by the platform. 
- Design: Naturally the design follows WCAG best practices for color contrast, however it can be both accessible and sleeker looking
- Functional Login button: Currently the login button is decorative, of course it would open a popup for the user to either connect through social signin (account abstraction mechanisms or equivalent) and/or wallet provider connect. See the marketplace or stake dapps for an example of a login modal popup. 


## Resources 

- [jest-axe](https://www.npmjs.com/package/jest-axe)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [w3 Accessible Modal Pattern JS](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)
- [Quick Guide to eslint](https://dev.to/lauragift21/quick-guide-to-linting-javascript-codebase-with-eslint-dcf)
- [aXe vscode extension](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
- [Android linter docs](https://developer.android.com/studio/write/lint)
- [WAI Functional Images](https://www.w3.org/WAI/tutorials/images/functional/#icon-image-conveying-information-within-link-text)
- [Landmark w3 page](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [Modal Accessibility in JS](https://humanwhocodes.com/blog/2013/02/12/making-an-accessible-dialog-box/)

