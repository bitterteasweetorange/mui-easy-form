import { Box, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CheckboxGroupIO, CheckboxGroupIOProps } from '.'
import { ChoiceShape, choiceOptions } from '../../../helpers/mockData'

const meta: Meta = {
  title: 'IO/CheckboxGroupIO',
  component: CheckboxGroupIO,
}
export default meta

type Story = StoryObj<CheckboxGroupIOProps<string>>

const Template = (args: CheckboxGroupIOProps<string>) => {
  const [value, onChange] = useState<string[] | null>(null)
  return (
    <CheckboxGroupIO<string>
      {...args}
      value={value}
      onChange={onChange}
    />
  )
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'label',
    color: 'warning',
    required: true,
    options: ['female', 'male'],
  },
}

export const Row: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'row, disabled, size',
    options: ['female', 'male'],
    row: true,
    disabled: true,
    size: 'small',
  },
}

type StoryChoiceShape = StoryObj<CheckboxGroupIOProps<ChoiceShape>>
const ShapeTemplate = (args: CheckboxGroupIOProps<ChoiceShape>) => {
  const [value, onChange] = useState<ChoiceShape[] | null>(null)
  return (
    <CheckboxGroupIO<ChoiceShape>
      {...args}
      options={choiceOptions}
      value={value}
      onChange={onChange}
    />
  )
}

export const DefaultLabel: StoryChoiceShape = {
  render: (args) => <ShapeTemplate {...args} />,
  args: {
    label: 'label',
  },
}

export const RenderOption: StoryChoiceShape = {
  render: (args) => <ShapeTemplate {...args} />,
  args: {
    label: 'render option',
    renderOption: (value: ChoiceShape) => (
      <Box>
        <Typography>{value.label}</Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {value.code}
        </Typography>
      </Box>
    ),
  },
}

export const GetOptionDisabled: StoryChoiceShape = {
  render: (args) => <ShapeTemplate {...args} />,
  args: {
    label: 'get option disabled',
    getOptionDisabled: (value: ChoiceShape) => value.id === 1,
  },
}

export const GetOptionColor: StoryChoiceShape = {
  render: (args) => <ShapeTemplate {...args} />,
  args: {
    label: 'get option color',
    getOptionColor: (value: ChoiceShape) =>
      value.id === 1 ? 'error' : 'warning',
  },
}

const IsOptionEqualTemplate = (args: CheckboxGroupIOProps<ChoiceShape>) => {
  const [value, onChange] = useState<ChoiceShape[] | null>([
    {
      id: 1,
    },
  ] as ChoiceShape[])
  return (
    <CheckboxGroupIO<ChoiceShape>
      {...args}
      value={value}
      onChange={onChange}
    />
  )
}
export const IsOptionEqual: StoryChoiceShape = {
  render: (args) => <IsOptionEqualTemplate {...args} />,
  args: {
    label: 'is option equal',
    options: choiceOptions,
    isOptionEqual: (option, value) => {
      return option.id === value?.id
    },
  },
}
