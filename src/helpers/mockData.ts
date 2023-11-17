import { MockObject } from 'src/components/IO/CascaderIO/mock'

export type ChoiceShape = {
  id: number
  code: string
  label: string
}

export const choiceOptions: ChoiceShape[] = [
  {
    id: 1,
    code: 'no1',
    label: 'sweet orange',
  },
  {
    id: 2,
    code: 'no2',
    label: 'bitter tea',
  },
]

export type MockShape = {
  birthday: number
  password: string
  passwordConfirm: string
  age: number
  name: {
    first: string
    last: string
  }
  optional?: boolean
  choice: ChoiceShape
  choiceId: number
  multipleChoice: ChoiceShape[]
  multipleChoiceId: number[]
  cascader?: MockObject
  cascaderId?: number[]
}
