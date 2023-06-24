import { cy, it } from 'local-cypress'
import { NumberIO } from '.'

it('init', () => {
  cy.mount(
    <NumberIO
      value={11}
      onChange={() => {
        console.log('default value', 11)
      }}
    ></NumberIO>,
  )
  cy.get('input').focus().type('word').should('have.attr', 'value', '11')
})
