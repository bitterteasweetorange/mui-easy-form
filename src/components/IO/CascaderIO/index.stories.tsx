import { Chip } from '@mui/material'
import { useState } from 'react'
import { CascaderIO } from '.'
import { MockObject, mockObjectNodes } from './mock'

const meta = {
  title: 'IO/CascaderIO',
  component: CascaderIO,
}

export default meta

export const Default = () => {
  const [value, onChange] = useState<MockObject | null>(mockObjectNodes[2])
  return (
    <CascaderIO<MockObject>
      data={mockObjectNodes}
      getNodeLabel={(node) => node.name}
      endAdornment={(node) => node.age && <Chip label={node.age} />}
      label={'label'}
      value={value}
      onChange={onChange}
    />
  )
}
