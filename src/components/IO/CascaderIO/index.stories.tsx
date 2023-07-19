import { Box, Chip } from '@mui/material'
import { useState } from 'react'
import { CascaderIO } from '.'
import { MockObject, mockObjectNodes } from './mock'

const meta = {
  title: 'IO/CascaderIO',
  component: CascaderIO,
}

export default meta

export const Default = () => {
  const [value, onChange] = useState<string | null>('0-1')
  return (
    <CascaderIO<string>
      nodes={[
        {
          value: '0',
          children: [
            {
              value: '0-0',
            },
            {
              value: '0-1',
            },
          ],
        },
        {
          value: '1',
        },
      ]}
      value={value}
      onChange={onChange}
      label="string"
    />
  )
}

export const GetNodeLabel = () => {
  const [value, onChange] = useState<string | null>('0-1')
  return (
    <CascaderIO<string>
      getNodeLabel={(node) => `prefix-${node}`}
      nodes={[
        {
          value: '0',
          children: [
            {
              value: '0-0',
            },
            {
              value: '0-1',
            },
          ],
        },
        {
          value: '1',
        },
      ]}
      value={value}
      onChange={onChange}
      label="getNodeLabel"
    />
  )
}

export const RenderNode = () => {
  const [value, onChange] = useState<string | null>('0-1')
  return (
    <CascaderIO<string>
      nodes={[
        {
          value: '0',
          children: [
            {
              value: '0-0',
            },
            {
              value: '0-1',
            },
          ],
        },
        {
          value: '1',
        },
      ]}
      value={value}
      onChange={onChange}
      label="renderNode"
      renderNode={(Label, { value }) => (
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            gap: 1,
          }}
        >
          {Label}
          {value.includes('1') && (
            <Chip
              color="success"
              variant="outlined"
              size="small"
              label="tag 1"
            />
          )}
        </Box>
      )}
    />
  )
}

export const Object = () => {
  const [value, onChange] = useState<MockObject | null>({
    id: 2,
    label: 'children-1',
    age: 10,
  })
  return (
    <CascaderIO<MockObject>
      nodes={mockObjectNodes}
      isEqual={(a, b) => a.id === b.id}
      value={value}
      onChange={onChange}
      label="object"
    />
  )
}
