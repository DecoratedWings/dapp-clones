
describe('Accessibility Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()
  })

  it('should have no accessibility violations', () => {
    cy.checkA11y(undefined, {
      //Omit potential false positives 
      rules: {
        'landmark-one-main': { enabled: false },
        'region': { enabled: false }
      }
    });
  });
})

