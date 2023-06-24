import { Box, Divider, Typography } from '@mui/material'
import { Meta } from '@storybook/react'
import { useState } from 'react'
import { RadioGroupIO } from '.'
import { ChoiceShape, choiceOptions } from '../../../helpers/mockData'

const meta: Meta = {
  title: 'IO/RadioGroupIO',
  component: RadioGroupIO,
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
        'options',
        'isOptionEqual',
        'renderOption',
        'getOptionDisabled',
        'getOptionColor',
        'row',
      ],
    },
  },
}

export default meta

export const Default = () => {
  const [value, onChange] = useState<string | null>(null)
  const [valueChoice, onChangeChoice] = useState<ChoiceShape | null>(null)
  const [valueChoice2, onChangeChoice2] = useState<ChoiceShape | null>({
    id: 1,
  } as ChoiceShape)
  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <Typography color="warning.main">
        string:{JSON.stringify(value)}
      </Typography>
      <RadioGroupIO<string>
        value={value}
        onChange={onChange}
        options={['female', 'male', 'other']}
        label="default"
      />
      <RadioGroupIO<string>
        value={value}
        onChange={onChange}
        options={['female', 'male', 'other']}
        label="row"
        row
        getOptionDisabled={(value) => value === 'other'}
      />
      <Divider />
      <Typography color="warning.main">
        choice:{JSON.stringify(valueChoice)}
      </Typography>
      <RadioGroupIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        options={choiceOptions}
        label="select choice"
      />
      <RadioGroupIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="render option"
        options={choiceOptions}
        renderOption={(value: ChoiceShape) => (
          <Box>
            <Typography>{value.label}</Typography>
            <Typography color="textSecondary" variant="caption">
              {value.code}
            </Typography>
          </Box>
        )}
      />
      <RadioGroupIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="get option color"
        options={choiceOptions}
        getOptionColor={(value: ChoiceShape) =>
          value.id === 1 ? 'error' : 'warning'
        }
      />
      <RadioGroupIO<ChoiceShape>
        value={valueChoice2}
        onChange={onChangeChoice2}
        label="is option equal"
        options={choiceOptions}
        isOptionEqual={(option, value) => {
          return option.id === value.id
        }}
      />
    </Box>
  )
}
