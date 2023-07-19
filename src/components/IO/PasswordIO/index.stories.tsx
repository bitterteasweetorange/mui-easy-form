import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PasswordIO, PasswordIOProps } from '.'

const meta: Meta = {
  title: 'IO/PasswordIO',
  component: PasswordIO,
  argTypes: {
    value: {
      control: '-',
    },
    clearIcon: {
      control: '-',
    },
  },
  parameters: {
    controls: {
      include: ['value', 'onChange', 'clearIcon', 'clearable'],
    },
  },
}
export default meta

type Story = StoryObj<PasswordIOProps>

const Template = (args: PasswordIOProps) => {
  const [value, onChange] = useState<string | null>('init value')
  return <PasswordIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'password',
  },
}
