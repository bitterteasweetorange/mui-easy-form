import { cy, it } from 'local-cypress'
import { PasswordIO } from '.'

it('init', () => {
  cy.mount(
    <PasswordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
    ></PasswordIO>,
  )
  cy.get('input').should('have.attr', 'type', 'password')
})

it('click switch button', () => {
  cy.mount(
    <PasswordIO
      value={'11'}
      onChange={() => {
        console.log('default value', 11)
      }}
    ></PasswordIO>,
  )
  cy.get('button[aria-label="toggle password visibility"]').click()
  cy.get('input').should('have.attr', 'type', 'text')
})
