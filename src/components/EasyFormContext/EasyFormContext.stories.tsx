import { Box, Button, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { EasyFormProvider, EasyFormProviderProps, createEasyFormTheme } from '.'
import { FieldGroup, FieldItemProps } from '../FieldGroup'

const meta: Meta = {
  title: 'EasyFormProvider',
  component: EasyFormProvider,
}

export default meta

type Story = StoryObj<EasyFormProviderProps>

type TemplateShape = {
  id: number
  name: {
    first: string
    last: string
  }
  age: number
}

const theme = createEasyFormTheme({
  FieldGroup: {
    sx: {
      gridTemplateColumns: '1fr 1fr',
      gap: 2,
    },
  },
  errorMessage: {
    required: 'theme error!',
  },
})

const fields: FieldItemProps<TemplateShape>[] = [
  {
    componentType: 'TEXT',
    name: 'id',
    label: 'id',
    required: true,
  },
  {
    componentType: 'TEXT',
    name: 'name.first',
    label: 'firstName',
  },
  {
    componentType: 'TEXT',
    label: 'lastName',
    name: 'name.last',
  },
]

const Template = () => {
  const { reset, handleSubmit, control } = useForm<TemplateShape>()

  return (
    <EasyFormProvider value={theme}>
      <form
        noValidate
        onSubmit={handleSubmit(
          (data) => {
            console.log(data)
          },

          (err) => {
            console.log('err', err)
          },
        )}
      >
        <Box display="grid" gap={4}>
          <Typography color="info.main">theme:</Typography>
          <FieldGroup<TemplateShape> control={control} fields={fields} />
          <Typography color="info.main">override FieldGroup style:</Typography>
          <FieldGroup<TemplateShape>
            control={control}
            fields={fields}
            sx={{
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 4,
              background: '#eee',
              padding: 4,
            }}
          />
          <Typography color="info.main">override errorMessage:</Typography>
          <FieldGroup<TemplateShape>
            control={control}
            fields={[
              {
                componentType: 'TEXT',
                name: 'age',
                label: 'age',
                required: true,
                rules: {
                  required: 'rules error!',
                },
              },
            ]}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Button
            color="secondary"
            onClick={() => {
              reset()
            }}
          >
            reset
          </Button>
          <Button type="submit">submit</Button>
        </Box>
      </form>
    </EasyFormProvider>
  )
}

export const Default: Story = {
  render: () => <Template />,
}
