describe('default value', () => {
  beforeEach(() => {
    cy.visit('/io-textio--clearable')
  })
  it('passes', () => {
    cy.get('input').should('contain.value', '123')
  })
})

describe('controlled value', () => {
  beforeEach(() => {
    cy.visit('/io-textio--clearable')
  })
  it('passes', () => {
    cy.get('input').type('456').should('contain.value', '123456')
  })
})

describe('empty value is null', () => {
  beforeEach(() => {
    cy.visit('/io-textio--empty-value')
  })
  it('passes', () => {
    cy.get('div').should('contain.text', 'null')
    cy.get('input').type('456').get('div').should('contain.text', 'string')
    cy.get('input')
      .focus()
      .get('button')
      .click({ multiple: true, force: true })
      .get('div')
      .should('contain.text', 'null')
  })
})
