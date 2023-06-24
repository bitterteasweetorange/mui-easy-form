import { SwitchProps } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SwitchIO, SwitchIOProps } from '.'

const colors: SwitchProps['color'][] = [
  'primary',
  'secondary',
  'error',
  'success',
  'warning',
  'info',
  'default',
]

const meta: Meta = {
  title: 'IO/SwitchIO',
  component: SwitchIO,
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

type Story = StoryObj<SwitchIOProps>

const Template = (args: SwitchIOProps) => {
  const [value, onChange] = useState<boolean | null>(true)
  return <SwitchIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'label',
    helperText: 'helperText',
  },
}
