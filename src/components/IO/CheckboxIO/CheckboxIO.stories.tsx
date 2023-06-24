import { CheckboxProps } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CheckboxIO, CheckboxIOProps } from '.'

const colors: CheckboxProps['color'][] = [
  'primary',
  'secondary',
  'error',
  'success',
  'warning',
  'info',
  'default',
]

const meta: Meta = {
  title: 'IO/CheckboxIO',
  component: CheckboxIO,
  argTypes: {
    value: {
      control: '-',
    },
    color: {
      control: 'select',
      options: colors,
    },
  },
  parameters: {
    controls: {
      include: [
        'value',
        'onChange',
        'label',
        'disabled',
        'error',
        'helperText',
        'color',
      ],
    },
  },
}

export default meta
type Story = StoryObj<CheckboxIOProps>

const Template = (args: CheckboxIOProps) => {
  const [value, onChange] = useState<boolean | null>(true)
  return <CheckboxIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'label',
    helperText: 'helperText',
  },
}
