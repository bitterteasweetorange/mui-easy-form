Combine Material UI and React Hook Form

![](https://img.shields.io/badge/license-MIT-000000.svg)
![TEST](https://github.com/bitterteasweetorange/mui-easy-form/actions/workflows/publish.yml/badge.svg)

## Features

- typescript support
- native support with material-ui & react-hook-form
- extend material-ui components
- provide uncontrolled & controlled components

## Install

- `npm install mui-easy-form`
- `yarn add mui-easy-form`
- `pnpm install mui-easy-form`

## QuickStart

```tsx
import { Button } from '@mui/material'

type User = {
  id: string
  name: {
    first: string
    last: string
  }
}

function App() {
  const { handleSubmit, control } = useForm<User>()
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <TextField<Shape>
        control={control}
        label="text"
        required
        name="name.first"
      />
      <FieldGroup<Shape>
        control={control}
        fields={[
          {
            componentType: 'TEXT',
            label: 'text',
            required: true,
            name: 'name.last',
          },
        ]}
      />
      <Button type="submit">submit</Button>
    </form>
  )
}
```

## Documentation

[demo](https://bitterteasweetorange.github.io/mui-easy-form/?path=/story/fieldgroup--default)

## Component List

- [x] word
- [x] password
- [x] number

## TODO

- [ ] codesandbox
- [ ] i18n
- [ ] reduce size
- [ ] FAQ: "XXIO" difference with "XXField"?
- [ ] eslint
