import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SliderIO, SliderIOProps } from '.'

const meta: Meta = {
  title: 'IO/SliderIO',
  component: SliderIO,
  argTypes: {
    value: {
      control: '-',
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
      ],
    },
  },
}
export default meta

type Story = StoryObj<SliderIOProps>

const Template = (args: SliderIOProps) => {
  const [value, onChange] = useState<number | null>(null)
  return <SliderIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'SwitchIO',
    helperText: 'helperText',
  },
}
