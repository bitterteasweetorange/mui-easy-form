import { Box, Button } from '@mui/material'
import { DateField, DateTimeField, TimeField } from '@mui/x-date-pickers'
import { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'
import { ChoiceShape, MockShape, choiceOptions } from '../../helpers/mockData'
import { CheckboxField } from './CheckboxField'
import { CheckboxGroupField } from './CheckboxGroupField'
import { NumberField } from './NumberField'
import { PasswordField } from './PasswordField'
import { RadioGroupField } from './RadioGroupField'
import { SelectField } from './SelectField'
import { SliderField } from './SliderField'
import { SwitchField } from './SwitchField'
import { TextField } from './TextField'

const meta: Meta = {
  title: 'Fields',
  component: TextField,
}

export default meta

type Story = StoryObj<any>

const Template = () => {
  const methods = useForm<MockShape>()
  const { reset, handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
          <TextField<MockShape> label="text" required name="name.first" />
          <NumberField<MockShape> label="number" required name="age" />
          <SwitchField<MockShape> label="switch" required name="optional" />
          <CheckboxField<MockShape> label="checkbox" required name="optional" />
          <RadioGroupField<MockShape, ChoiceShape>
            label="radio group"
            name="choice"
            options={choiceOptions}
            required
          />
          <CheckboxGroupField<MockShape, ChoiceShape>
            label="checkbox group"
            name="multipleChoice"
            options={choiceOptions}
            required
          />
          <SelectField<MockShape, ChoiceShape>
            label="select single"
            name="choice"
            search
            options={choiceOptions}
            required
          />
          <SelectField<MockShape, ChoiceShape>
            multiple={true}
            label="select multi"
            name="multipleChoice"
            search
            options={choiceOptions}
            required
          />
          <DateField<MockShape> label="date" required name="birthday" />
          <TimeField<MockShape> label="time" required name="birthday" />
          <DateTimeField<MockShape> label="datetime" required name="birthday" />
          <PasswordField<MockShape>
            label="password"
            required
            name="name.first"
          />
          <SliderField<MockShape> label="slider" required name="age" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button
            color="secondary"
            onClick={() => {
              reset()
            }}
          >
            reset
          </Button>
          <Button type="submit">submit</Button>
        </Box>
      </form>
    </FormProvider>
  )
}

export const Default: Story = {
  render: () => <Template />,
}
