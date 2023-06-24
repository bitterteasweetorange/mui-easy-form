import { cy, it } from 'local-cypress'
import { CheckboxIO } from '.'

it('label & helperText', () => {
  cy.mount(
    <CheckboxIO
      value={true}
      onChange={() => {
        console.log('default value', true)
      }}
      label="label"
      helperText="helperText"
    ></CheckboxIO>,
  )
  cy.get('span')
    .should('have.class', 'MuiFormControlLabel-label')
    .should('contain.text', 'label')
  cy.get('p')
    .should('have.class', 'MuiFormHelperText-root')
    .should('contain.text', 'helperText')
})
