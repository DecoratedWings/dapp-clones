# dapp-clones

Welcome to "dapp-clones", where we delve into the world of decentralized applications (DApps) and their user experience (UX) design. In this dynamic digital age, DApps have become crucial in the blockchain ecosystem, offering innovative solutions and services. However, the success of any DApp heavily relies on its accessibility and usability. 

This sample outlines general better practices in DApp design, ensuring they are not only functional but also accessible to a broader audience, including those with disabilities. From color contrast to navigation, we explore essential design considerations, backed by relevant WCAG 2.2 references, to help you build more inclusive and user-friendly DApps.


## General Better Practices 
There are some accessibility enhancements that are generalizable to all dapp categories. 

- **Color Contrast**: If possible, having multiple themes (see stakedapp), allows the user more choice and flexibility. It is important that each theme has proper contrast. At a bare minimum, the UI should have a toggleable light/dark theme with light mode being default as best practice. [1.4.3]
- **Login Button**: Due to the fact that web3 UX has evolved to handle social sign on or email login, it makes more sense to have a login or signup button, as opposed to the prevalent "connect wallet" button. 
Connect wallet can be incorporated as an option in a list of providers (google, twitter, etc). Every part of the modal: form and buttons should be clearly labeled with proper instructions [3.3.2]
- **Modal Focus Trap**: When a modal popup is displayed, the user should not be able to tab off of it. In other words the focus should be confined to the popup, with a clear working close button present. [2.1.1], 
[2.4.3], [2.4.7]
- **Site Maps**: No matter how simple the dapp interface is, a site map should still be present. Every dapp at a minimum will still have terms of service, privacy policies, and social links. Dapps that are not single page applications (SPAs), will have other routes, which can be found in the site map of the footer. This is an important guidemap/reference for keyboard and screenreader users. For dapps with greater complexity in navigation bars and sidebars, this becomes even more pertinent.[2.4.5]
- **Reduce Jargon & Unnecessary Technical Terms**: These dapp references are simplified examples. More work is to be done beyond the straightforward functionality. Nevertheless, proper explanations and more beginner-friendly terms are imperative where possible. In our stakedapp we have a dedicated about page for an explanation of the application. Another option, which is actually preferable, is to feature a banner atop the page with a clear explanation of the purpose and course of action the user can undertake. We leverage a banner in our marketplace dapp.[3.1.5]



## Relevant WCAG 2.2 References 

- [1.4.3 Contrast (Minimum)]()
- [3.3.2 Labels or Instructions]()
- [2.1.1 Keyboard]()
- [2.4.3 Focus Order]()
- [2.4.7 Focus Visible]()
- [2.4.5 Multiple Ways]()
- [3.1.5 Reading Level]()
