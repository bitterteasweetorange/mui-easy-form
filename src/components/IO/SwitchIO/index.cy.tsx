import { cy, it } from 'local-cypress'
import { SwitchIO } from '.'

it('label & helperText', () => {
  cy.mount(
    <SwitchIO
      value={true}
      onChange={() => {
        console.log('default value', true)
      }}
      label="label"
      helperText="helperText"
    ></SwitchIO>,
  )
  cy.get('span')
    .should('have.class', 'MuiFormControlLabel-label')
    .should('contain.text', 'label')
  cy.get('p')
    .should('have.class', 'MuiFormHelperText-root')
    .should('contain.text', 'helperText')
})
