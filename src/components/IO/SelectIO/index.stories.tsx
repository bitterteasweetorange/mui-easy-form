import { Box, Divider, Typography } from '@mui/material'
import { Meta } from '@storybook/react'
import { useState } from 'react'
import { SelectIO, SelectIOProps } from '.'
import { ChoiceShape, choiceOptions } from '../../../helpers/mockData'

const meta: Meta = {
  title: 'IO/SelectIO',
  component: SelectIO,
} satisfies Meta<SelectIOProps<string>>

export default meta

export const Single = () => {
  const [value, onChange] = useState<string | null>(null)
  const [valueChoice, onChangeChoice] = useState<ChoiceShape | null>(null)
  const [valueChoice2, onChangeChoice2] = useState<ChoiceShape | null>({
    id: 1,
  } as ChoiceShape)
  const [valueChoice3, onChangeChoice3] = useState<ChoiceShape['id'] | null>(1)
  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <Typography color="warning.main">
        string:{JSON.stringify(value)}
      </Typography>
      <SelectIO<string, false>
        value={value}
        onChange={onChange}
        label="get option disabled"
        options={['female', 'male', 'other']}
        getOptionDisabled={(value) => value === 'other'}
      />
      <SelectIO<string, false>
        value={value}
        onChange={onChange}
        label="string search"
        options={['female', 'male']}
        search
      />
      <Divider />
      <Typography color="warning.main">
        choice:
        {JSON.stringify(valueChoice)}
      </Typography>
      <SelectIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="select choice"
        options={choiceOptions}
      />
      <SelectIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="search choice"
        options={choiceOptions}
        search
      />
      <SelectIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="get option label"
        options={choiceOptions}
        search
        getOptionLabel={(option) => `${option.label} - ${option.code}`}
      />
      <SelectIO<ChoiceShape>
        value={valueChoice}
        onChange={onChangeChoice}
        label="render option"
        options={choiceOptions}
        search
        renderOption={(value: ChoiceShape) => (
          <Box>
            <Typography>{value.label}</Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              {value.code}
            </Typography>
          </Box>
        )}
      />
      <SelectIO<ChoiceShape>
        value={valueChoice2}
        onChange={onChangeChoice2}
        label="is option equal"
        options={choiceOptions}
        isOptionEqual={(option, value) => {
          return option.id === value.id
        }}
      />
      <Divider />
      <Typography color="warning.main">
        {JSON.stringify(valueChoice3)}
      </Typography>
      <SelectIO<ChoiceShape, false, number>
        value={valueChoice3}
        onChange={onChangeChoice3}
        label="get option to value"
        options={choiceOptions}
        getOption2Value={(option) => option.id}
      />
    </Box>
  )
}

export const Multiple = () => {
  const [value, onChange] = useState<string[] | null>(null)
  const [valueChoice, onChangeChoice] = useState<ChoiceShape[] | null>(null)
  const [valueChoice2, onChangeChoice2] = useState<ChoiceShape[] | null>([
    {
      id: 1,
    },
  ] as ChoiceShape[])
  const [valueChoice3, onChangeChoice3] = useState<ChoiceShape['id'][] | null>([
    1,
  ])
  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <Typography color="warning.main">{JSON.stringify(value)}</Typography>
      <SelectIO<string, true>
        value={value}
        onChange={onChange}
        label="get option disabled"
        options={['female', 'male', 'other']}
        getOptionDisabled={(value) => value === 'other'}
        multiple
        checkbox
      />
      <SelectIO<string, true>
        value={value}
        onChange={onChange}
        label="search"
        options={['female', 'male']}
        search
        multiple
      />
      <Divider />
      <Typography color="warning.main">
        {JSON.stringify(valueChoice)}
      </Typography>
      <SelectIO<ChoiceShape, true>
        value={valueChoice}
        onChange={onChangeChoice}
        label="select choice"
        options={choiceOptions}
        multiple
      />
      <SelectIO<ChoiceShape, true>
        value={valueChoice}
        onChange={onChangeChoice}
        label="search choice"
        options={choiceOptions}
        search
        multiple
      />
      <SelectIO<ChoiceShape, true>
        value={valueChoice}
        onChange={onChangeChoice}
        label="get option label"
        options={choiceOptions}
        search
        getOptionLabel={(option) => `${option.label} - ${option.code}`}
        multiple
      />
      <SelectIO<ChoiceShape, true>
        value={valueChoice}
        onChange={onChangeChoice}
        label="render option"
        options={choiceOptions}
        search
        renderOption={(value: ChoiceShape) => (
          <Box>
            <Typography>{value.label}</Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              {value.code}
            </Typography>
          </Box>
        )}
        multiple
      />
      <SelectIO<ChoiceShape, true>
        value={valueChoice2}
        onChange={onChangeChoice2}
        label="is option equal"
        options={choiceOptions}
        isOptionEqual={(option, value) => {
          return option.id === value.id
        }}
        multiple
      />
      <Divider />
      <Typography color="warning.main">
        {JSON.stringify(valueChoice3)}
      </Typography>
      <SelectIO<ChoiceShape, true, number>
        value={valueChoice3}
        onChange={onChangeChoice3}
        label="get option to value"
        options={choiceOptions}
        getOption2Value={(option) => option.id}
        multiple
      />
    </Box>
  )
}
