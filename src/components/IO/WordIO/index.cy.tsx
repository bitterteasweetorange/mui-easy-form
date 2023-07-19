import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { cy, it } from 'local-cypress'
import { WordIO } from '.'

it('clearable when focus', () => {
  cy.mount(
    <WordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
    ></WordIO>,
  )
  cy.get('input').focus()
  cy.get('svg').should('exist').should('have.attr', 'data-testid', 'ClearIcon')
})

it('clearable when hover', () => {
  cy.mount(
    <WordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
    ></WordIO>,
  )
  // https://github.com/cypress-io/cypress/issues/10
  cy.get('input').trigger('mouseover')
  cy.get('svg').should('exist').should('have.attr', 'data-testid', 'ClearIcon')
})

it('disable clearable', () => {
  cy.mount(
    <WordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
      clearable
    ></WordIO>,
  )
  cy.get('input').focus()
  cy.should('not.have.attr', 'data-testid', 'ClearIcon')
})

it('clearable when focus', () => {
  cy.mount(
    <WordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
      clearIcon={<DeleteOutlineIcon />}
    ></WordIO>,
  )
  cy.get('input').focus()
  cy.get('svg')
    .should('exist')
    .should('have.attr', 'data-testid', 'DeleteOutlineIcon')
})
