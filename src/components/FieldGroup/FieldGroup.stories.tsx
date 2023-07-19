import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { Box, Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { FieldGroup, FieldGroupProps } from '.'
import { ChoiceShape, MockShape, choiceOptions } from '../../helpers/mockData'
import { MockObject, mockObjectNodes } from '../IO/CascaderIO/mock'

const meta: Meta = {
  title: 'FieldGroup',
  component: FieldGroup,
}

export default meta

type Story = StoryObj<FieldGroupProps<MockShape>>

const Template = () => {
  const { watch, reset, handleSubmit, control } = useForm<MockShape>({
    mode: 'onChange',
  })

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <FieldGroup<MockShape>
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2,1fr)',
        }}
        control={control}
        fields={[
          {
            componentType: 'SWITCH',
            label: 'SWITCH',
            name: 'optional',
            required: true,
          },
          {
            componentType: 'CHECKBOX',
            label: 'CHECKBOX',
            name: 'optional',
            required: true,
            icon: <FavoriteBorder />,
            checkedIcon: <Favorite />,
          },
          {
            required: true,
            componentType: 'TEXT',
            name: 'name.first',
            label: 'TEXT',
            condition: {
              watch,
              fieldName: 'optional',
              is: (fieldValue) => !!fieldValue,
            },
            sx: {
              gridColumn: 'auto / span 2',
            },
          },
          {
            componentType: 'NUMBER',
            name: 'age',
            label: 'NUMBER',
            required: true,
            sx: {
              gridColumn: 'auto / span 2',
            },
          },
          {
            componentType: 'RADIO-GROUP',
            label: 'RADIO-GROUP',
            name: 'choice',
            required: true,
            options: choiceOptions,
          },
          {
            componentType: 'CHECKBOX-GROUP',
            label: 'CHECKBOX-GROUP',
            name: 'multipleChoice',
            required: true,
            options: choiceOptions,
          },
          {
            componentType: 'SELECT',
            label: 'SELECT',
            name: 'choice',
            required: true,
            options: choiceOptions,
            renderOption: (option: ChoiceShape) => option.label,
          },
          {
            componentType: 'SELECT',
            label: 'SELECT-MULTI',
            name: 'multipleChoice',
            required: true,
            options: choiceOptions,
            multiple: true,
          },
          {
            componentType: 'SELECT',
            label: 'AUTOCOMPLETE',
            name: 'choice',
            required: true,
            options: choiceOptions,
            renderOption: (option: ChoiceShape) => option.label,
            search: true,
          },
          {
            componentType: 'SELECT',
            label: 'AUTOCOMPLETE-MULTI',
            name: 'multipleChoice',
            required: true,
            options: choiceOptions,
            multiple: true,
            search: true,
          },
          {
            componentType: 'DATE',
            label: 'Date',
            name: 'birthday',
            required: true,
          },
          {
            componentType: 'TIME',
            label: 'Time',
            name: 'birthday',
            required: true,
          },
          {
            componentType: 'DATETIME',
            label: 'DateTime',
            name: 'birthday',
            required: true,
          },
          {
            componentType: 'PASSWORD',
            name: 'password',
            label: 'password',
            required: true,
          },
          {
            componentType: 'SLIDER',
            name: 'age',
            label: 'slider',
            required: true,
          },
          {
            componentType: 'CASCADER',
            nodes: mockObjectNodes,
            isEqual: (a: MockObject, b: MockObject) => a.id === b.id,
            name: 'cascader',
            label: 'cascader',
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
  render: () => <Template />,
}
