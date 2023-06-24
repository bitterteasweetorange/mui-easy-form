describe('default', () => {
  beforeEach(() => {
    cy.visit('/io-radiogroupio--default')
  })
  it('passes', () => {
    cy.get('label')
      .contains('default')
      .siblings('div')
      .children('label')
      .eq(0)
      .click()
      .get('p')
      .should('contain.text', 'string:"female"')
  })
})

describe('get option disabled', () => {
  beforeEach(() => {
    cy.visit('/io-radiogroupio--default')
  })
  it('passes', () => {
    cy.get('label')
      .contains('row')
      .siblings('div')
      .children('label')
      .eq(2)
      .should('have.class', 'Mui-disabled')
  })
})

describe('select choice', () => {
  beforeEach(() => {
    cy.visit('/io-radiogroupio--default')
  })
  it('passes', () => {
    cy.get('label')
      .contains('select choice')
      .siblings('div')
      .children('label')
      .eq(0)
      .click()
      .get('p')

      .should(
        'contain.text',
        'choice:{"id":1,"code":"no1","label":"sweet orange"}',
      )
  })
})

describe('is option equal', () => {
  beforeEach(() => {
    cy.visit('/io-radiogroupio--default')
  })
  it('passes', () => {
    cy.get('label')
      .contains('is option equal')
      .siblings('div')
      .children('label')
      .eq(0)
      .children('span')
      .should('have.class', 'Mui-checked')
  })
})
