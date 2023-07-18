
import { Box, Chip } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { CascaderIO } from '.'
import { MockObject, mockObjectNodes } from './mock'

const meta = {
  title: 'IO/CascaderIO',
  component: CascaderIO,
} satisfies Meta<typeof CascaderIO>

export default meta

export const Defalut = () => {
  const [value, onChange] = useState<MockObject | null>({
    id: 2,
    label: 'children-1',
    age: 10,
  })
  return (
    <CascaderIO<MockObject>
      nodes={mockObjectNodes}
      isEqual={(a, b) => a.id === b.id}
      getNodeLabel={(node) =>
        `${node.label}${node.age ? '(' + node.age + ')' : ''}`
      }
      value={value}
      onChange={onChange}
      helperText="helperText"
      label="label"
      error={false}
      required
      disabled={false}
      renderNode={(Label, { value }) => (
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            gap: 1,
          }}
        >
          {Label}
          {value.age && (
            <Chip
              variant="outlined"
              size="small"
              label={value.age}
              color={value.age > 18 ? 'success' : 'error'}
            />
          )}
        </Box>
      )}
    />
  )
}
