import { cy, it } from 'local-cypress'
import { SliderIO } from '.'

it('label & helperText', () => {
  cy.mount(
    <SliderIO
      value={12}
      onChange={() => {
        console.log('default value', 12)
      }}
      label="label"
      helperText="helperText"
    ></SliderIO>,
  )
  cy.get('label')
    .should('have.class', 'MuiFormLabel-root')
    .should('contain.text', 'label')
  cy.get('p')
    .should('have.class', 'MuiFormHelperText-root')
    .should('contain.text', 'helperText')
})
