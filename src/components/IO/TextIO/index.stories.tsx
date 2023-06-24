import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TextIO, TextIOProps } from '.'

const meta: Meta = {
  title: 'IO/TextIO',
  component: TextIO,
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
} satisfies Meta<TextIOProps>

export default meta

type Story = StoryObj<TextIOProps>

const Template = (args: TextIOProps) => {
  const [value, onChange] = useState<string | null>('123')
  return <TextIO {...args} value={value} onChange={onChange} />
}

export const Clearable: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'clearable',
  },
}

export const DisableClearable: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'disable clearable',
    disableClearable: true,
  },
}

export const ClearIcon: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'clear icon',
    clearIcon: <DeleteOutlineIcon fontSize="small" color="error" />,
  },
}

const EmptyValueTemplate = (args: TextIOProps) => {
  const [value, onChange] = useState<string | null>(null)
  return (
    <Box>
      <TextIO
        {...args}
        value={value}
        onChange={onChange}
        helperText={
          <Box>
            typeof value:
            {value === null ? (
              <Typography color="error.main" variant="caption">
                null
              </Typography>
            ) : (
              <Typography color="success.main" variant="caption">
                {typeof value}
              </Typography>
            )}
          </Box>
        }
      />
    </Box>
  )
}

export const EmptyValue: Story = {
  render: (args) => <EmptyValueTemplate {...args} />,
  args: {
    label: 'empty value',
  },
}
