import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NumberIO, NumberIOProps } from '.'

const meta: Meta = {
  title: 'IO/NumberIO',
  component: NumberIO,
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
      include: ['value', 'onChange', 'clearIcon', 'disableClearable'],
    },
  },
}
export default meta

type Story = StoryObj<NumberIOProps>

const Template = (args: NumberIOProps) => {
  const [value, onChange] = useState<number | null>(null)
  return <NumberIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'number',
  },
}
