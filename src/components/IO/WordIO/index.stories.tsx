import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { WordIO, type WordIOProps } from '.'

const meta: Meta = {
  title: 'IO/WordIO',
  component: WordIO,
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
} satisfies Meta<WordIOProps>

export default meta

type Story = StoryObj<WordIOProps>

const Template = (args: WordIOProps) => {
  const [value, onChange] = useState<string | null>('init value')
  return <WordIO {...args} value={value} onChange={onChange} />
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'default',
  },
}

export const Clearable: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'clearable',
    clearable: true,
  },
}

export const ClearIcon: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'clear icon',
    clearIcon: <DeleteOutlineIcon fontSize="small" color="error" />,
    clearable: true,
  },
}
