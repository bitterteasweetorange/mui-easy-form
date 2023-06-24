import { Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DateIO, DateIOProps } from '.'
import { DateTimeIO, DateTimeIOProps } from '../DateTimeIO'
import { TimeIO, TimeIOProps } from '../TimeIO'

const meta: Meta<DateIOProps> = {
  title: 'IO/DateIO & DateTimeIO & TimeIO',
  component: DateIO,
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
type Story = StoryObj<DateIOProps>

const Template = (args: DateIOProps) => {
  const [value, onChange] = useState<number | null>(null)
  return (
    <Stack>
      <DateIO {...args} label="DateIO" value={value} onChange={onChange} />
      <TimeIO
        {...(args as TimeIOProps)}
        label="TimeIO"
        value={value}
        onChange={onChange}
      />
      <DateTimeIO
        {...(args as DateTimeIOProps)}
        label="DateTimeIO"
        value={value}
        onChange={onChange}
      />
    </Stack>
  )
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'label',
    helperText: 'helperText',
  },
}
