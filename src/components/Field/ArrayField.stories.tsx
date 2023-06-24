import { Box, Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { MockShape } from '../../helpers/mockData'
import { ArrayField, ArrayFieldProps } from './ArrayField'

const meta: Meta = {
  title: 'ArrayField',
  component: ArrayField,
}

export default meta

type Shape = {
  array: MockShape[]
}

type Story = StoryObj<ArrayFieldProps<Shape, MockShape>>

const Template = () => {
  const { reset, handleSubmit, control } = useForm<Shape>({
    mode: 'onChange',
    defaultValues: {
      array: [{ name: { first: 'first', last: 'last' }, age: 20 }],
    },
  })

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <ArrayField<Shape, MockShape>
        maxLength={3}
        minLength={1}
        defaultValueForAppend={{ name: { first: '' }, age: 30 }}
        name="array"
        sxFieldGroup={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2,1fr)',
        }}
        control={control}
        showPrefix={(index) => index + 1 + '个'}
        fields={[
          {
            componentType: 'TEXT',
            name: 'name.first',
            label: 'TEXT',
            required: true,
            autoFocus: true,
          },
          {
            componentType: 'NUMBER',
            name: 'age',
            label: 'Number',
            required: true,
          },
        ]}
      />
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
  )
}

export const Default: Story = {
  render: () => <Template></Template>,
}
