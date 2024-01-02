# Accessible Dex 

Decentralized Exhanges are among the simpler interfaces for dapps. 
Although they appear to be straightforward, they are still fraught with basic accessibility issues for users. This example features a more accessible design, with some room for suggested improvements for user experience.

For a full list of accessibility features, please see the section below.

| Disclaimer: This app is not production ready and is currently unaudited. |

### Running Instructions
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

## Testing

Run with:
```$ npm run test```

In addition to the WAVE browser plugin by WebAIM, which facilitates page scanning, the Axe testing suite offers robust accessibility linting capabilities. However, due to limitations with jsdom, Axe is unable to assess color contrast issues. On the other hand, the WAVE tool is capable of evaluating color contrast, making the combination of Axe and WAVE particularly effective. This synergy is further enhanced by the range of additional functionalities provided by WAVE.

Jest-Axe allows you to check rendered code against axe standards.
We will reiterate an important point that they mention upfront in the repository: 

``The GDS Accessibility team found that only ~30% of issues are found by automated testing.``

User testing is required even if all linting, automated test suites, and audits pass.


Reference: 

- [WAI Functional Images](https://www.w3.org/WAI/tutorials/images/functional/#icon-image-conveying-information-within-link-text)
- [Landmark w3 page](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [Modal Accessibility in JS](https://humanwhocodes.com/blog/2013/02/12/making-an-accessible-dialog-box/)


## Resources 

- [jest-axe](https://www.npmjs.com/package/jest-axe)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [w3 Accessible Modal Pattern JS](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)
- [Quick Guide to eslint](https://dev.to/lauragift21/quick-guide-to-linting-javascript-codebase-with-eslint-dcf)
- [aXe vscode extension](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
- [Android linter docs](https://developer.android.com/studio/write/lint)


### Deployed Application

This application is deployed at: https://a11y-dex.netlify.app/

Netifly specific deployments include a pluggable lighthouse component, an automated tool for accessibility and webapp/website performance. 

- [Netifly Lighthouse Article](https://docs.netlify.com/monitor-sites/lighthouse/)
- [Lighthouse Chrome](https://developer.chrome.com/docs/lighthouse/overview/)
