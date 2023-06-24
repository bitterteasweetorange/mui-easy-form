describe('get option to value: init', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option to value')
      .siblings('div')
      .children('input')
      .should('have.attr', 'value', 'sweet orange')
    cy.get('p').should('contain.text', '1')
  })
})

describe('get option to value: select', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option to value')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('bitter')
      .click()
      .get('p')
      .should('contain.text', '2')
  })
})

describe('get option disabled', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option disabled')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('other')
      .should('have.attr', 'aria-disabled', 'true')
  })
})

describe('select', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option disabled')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('female')
      .click()
      .get('p')
      .should('contain.text', 'string:"female"')
  })
})

describe('search', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('string search')
      .siblings('div')
      .children('input')
      .focus()
      .type('fe')
      .get('li[class=MuiAutocomplete-option]')
      .should('have.length', 1)
      .click()
      .get('p')
      .should('contain.text', 'string:"female"')
  })
})

describe('select choice', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('select choice')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('sweet')
      .click()
      .get('p')
      .should(
        'contain.text',
        'choice:{"id":1,"code":"no1","label":"sweet orange"}',
      )
  })
})

describe('search choice', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('search choice')
      .siblings('div')
      .children('input')
      .focus()
      .type('or')
      .get('li[class=MuiAutocomplete-option]')
      .should('have.length', 1)
      .click()
      .get('p')
      .should(
        'contain.text',
        'choice:{"id":1,"code":"no1","label":"sweet orange"}',
      )
  })
})

describe('get option label', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option label')
      .siblings('div')
      .children('input')
      .focus()
      .type('no1')
      .get('li[class=MuiAutocomplete-option]')
      .should('have.length', 1)
      .click()
      .get('p')
      .should(
        'contain.text',
        'choice:{"id":1,"code":"no1","label":"sweet orange"}',
      )
    cy.get('label')
      .contains('get option label')
      .siblings('div')
      .children('input')
      .should('have.attr', 'value', 'sweet orange - no1')
  })
})

describe('is option equal', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--single')
  })
  it('passes', () => {
    cy.get('label')
      .contains('is option equal')
      .siblings('div')
      .children('input')
      .should('have.attr', 'value', 'sweet orange')
  })
})

describe('multiple select', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--multiple')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option disabled')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('female')
      .click()
      .get('li')
      .contains(':nth-child(2)', 'male')
      .click()
    cy.get('p').should('contain.text', '["female","male"]')
  })
})

describe('get option to value: init', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--multiple')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option to value')
      .siblings('div')
      .children('div')
      .eq(0)
      .children('span')
      .should('contain.text', 'sweet orange')
    cy.get('p').should('contain.text', '[1]')
  })
})

describe('get option to value: select', () => {
  beforeEach(() => {
    cy.visit('/io-selectio--multiple')
  })
  it('passes', () => {
    cy.get('label')
      .contains('get option to value')
      .siblings('div')
      .children('input')
      .click()
      .get('li')
      .contains('bitter')
      .click()
      .get('p')
      .should('contain.text', '[1,2]')
  })
})
